import React, { useState } from 'react';
import { X, Send, Sparkles, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function QuaAiWidget({ onOpenDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'qua',
      text: 'Hello! I am QUA AI, Procucev\'s global autonomous procurement assistant. How can I help you source items or lower procurement spend today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    "How does global buyer-seller matching work?",
    "What is the average savings ROI?",
    "Join the Marketplace"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let botResponse = "QUA AI automates your global procurement from PR to vendor quotation comparison with zero human intervention. Would you like to schedule a 15-minute live platform demonstration?";
      if (query.toLowerCase().includes('demo') || query.toLowerCase().includes('join') || query.toLowerCase().includes('marketplace')) {
        botResponse = "I'd be happy to set up your account on the Procucev Global Marketplace! Click the button below to register.";
        onOpenDemo();
      } else if (query.toLowerCase().includes('savings') || query.toLowerCase().includes('roi')) {
        botResponse = "Our clients in Retail, E-Commerce, and Consumer Brands consistently achieve 8% to 18% direct procurement savings within 60 days of deployment.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'qua',
          text: botResponse,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  return (
    <div className="qua-widget-fixed-container">
      
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="qua-chat-popup">
          
          {/* Header */}
          <div className="chat-popup-header">
            <div className="header-user-info">
              <div className="avatar-box">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="assistant-title">
                  QUA AI Assistant <span className="version-tag">v3.0</span>
                </h4>
                <p className="assistant-subtitle">Global B2B Sourcing Intelligence</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="close-popup-btn"
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Info Badge */}
          <div className="chat-status-strip">
            <span className="status-flex">
              <CheckCircle2 size={13} className="text-mint" /> 50,000+ Verified Suppliers
            </span>
            <span className="coverage-text">Global Coverage</span>
          </div>

          {/* Message List */}
          <div className="messages-scroll-area">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`msg-row ${msg.sender === 'user' ? 'msg-user' : 'msg-qua'}`}
              >
                <div className="msg-bubble">
                  <p>{msg.text}</p>
                  <span className="msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="prompts-wrap-box">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="prompt-pill-btn"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="chat-input-bar">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask QUA AI anything..."
              className="text-input"
            />
            <button
              onClick={() => handleSend()}
              className="send-btn"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>

        </div>
      )}

      {/* Floating Launcher Bubble */}
      <div className="qua-launcher-row">
        {!isOpen && (
          <div className="qua-speech-bubble">
            <span>Have any questions? <strong>QUA AI is happy to help.</strong></span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="qua-trigger-btn"
          aria-label="Toggle QUA AI Assistant"
        >
          {isOpen ? (
            <ChevronUp size={22} />
          ) : (
            <Sparkles size={22} />
          )}
        </button>
      </div>

      <style>{`
        .qua-widget-fixed-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          pointer-events: none;
        }

        .qua-chat-popup {
          pointer-events: auto;
          background: #0f172a;
          color: #ffffff;
          border: 1px solid #334155;
          border-radius: 20px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
          width: 360px;
          overflow: hidden;
          margin-bottom: 12px;
          animation: slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chat-popup-header {
          padding: 14px 16px;
          background: linear-gradient(135deg, #074193 0%, #04285c 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-user-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #10b981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .assistant-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .version-tag {
          font-size: 0.68rem;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          padding: 1px 6px;
          border-radius: 4px;
          font-family: monospace;
        }
        .assistant-subtitle {
          font-size: 0.72rem;
          color: #cbd5e1;
        }

        .close-popup-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .close-popup-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .chat-status-strip {
          background: #020617;
          padding: 8px 16px;
          font-size: 0.72rem;
          color: #94a3b8;
          border-bottom: 1px solid #1e293b;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .status-flex {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
        }
        .text-mint { color: #34d399; }
        .coverage-text { color: #64748b; }

        .messages-scroll-area {
          padding: 16px;
          height: 260px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #0f172a;
        }

        .msg-row {
          display: flex;
        }
        .msg-user { justify-content: flex-end; }
        .msg-qua { justify-content: flex-start; }

        .msg-bubble {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .msg-user .msg-bubble {
          background: #10b981;
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }
        .msg-qua .msg-bubble {
          background: #1e293b;
          color: #cbd5e1;
          border: 1px solid #334155;
          border-bottom-left-radius: 2px;
        }
        .msg-time {
          display: block;
          font-size: 0.65rem;
          opacity: 0.7;
          text-align: right;
          margin-top: 4px;
        }

        .prompts-wrap-box {
          padding: 10px;
          background: #020617;
          border-top: 1px solid #1e293b;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .prompt-pill-btn {
          background: #1e293b;
          border: 1px solid #334155;
          color: #cbd5e1;
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .prompt-pill-btn:hover {
          background: #334155;
          color: #ffffff;
        }

        .chat-input-bar {
          padding: 10px 12px;
          background: #020617;
          border-top: 1px solid #1e293b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .text-input {
          flex: 1;
          background: #1e293b;
          border: 1px solid #334155;
          color: #ffffff;
          font-size: 0.8rem;
          padding: 8px 12px;
          border-radius: 10px;
          outline: none;
        }
        .text-input:focus {
          border-color: #10b981;
        }
        .send-btn {
          background: #10b981;
          border: none;
          color: #ffffff;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .send-btn:hover {
          background: #059669;
        }

        /* Fixed Floating Launcher Button */
        .qua-launcher-row {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .qua-speech-bubble {
          background: #ffffff;
          color: #0f172a;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          white-space: nowrap;
        }
        .qua-speech-bubble strong {
          color: #074193;
        }

        .qua-trigger-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: #ffffff;
          border: 2px solid #ffffff;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .qua-trigger-btn:hover {
          transform: scale(1.08);
        }

        @media (max-width: 640px) {
          .qua-speech-bubble { display: none; }
          .qua-chat-popup { width: 310px; }
        }
      `}</style>
    </div>
  );
}
