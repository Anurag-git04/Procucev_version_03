import React, { useState } from 'react';
import { Users, Award, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function TeamSection() {
  const [expanded, setExpanded] = useState({ 0: false, 1: false });

  const leadership = [
    {
      name: 'Srinivas Mukku',
      role: 'Co-Founder & CEO',
      photo: 'https://procucev.com/wp-content/uploads/2026/02/WhatsApp-Image-2021-06-09-at-8.33.27-PM-e1646728037406.webp',
      tags: ['Co-Founder & CEO', 'Ex-ISRO Scientist', 'CPSM Certified', 'IIM Welingkar MBA'],
      shortBio:
        'A Senior Procurement Professional and subject matter expert with market insights across varied product categories. Has handled procurement of products/services worth more than $2 Billion across manufacturing, retail and services sectors.',
      fullBio: [
        'A Senior Procurement Professional and subject matter expert, he comes with a wealth of market insights across varied product categories. Throughout his career, he has handled procurement of products/services worth more than $2 Billion across sectors like manufacturing, retail and services.',
        'His passion lies in transforming procurement departments from being operational focused to becoming a true strategic constituent in a company\'s growth. He is a "Certified Professional in Supply Management (CPSM)" by ISM, USA — and a reputed conference speaker in multiple national & international forums, contributing to renowned magazines and publications in his field.',
        'Srini is a strong advocate of adopting innovative technologies to drive efficiencies and effectiveness of the procurement processes. Opportunities to create tangible business impact motivated Srini to move from the staid world of Space as a Scientist at Indian Space Research Organization (ISRO) to the hustle and bustle of Corporate India.',
        'He is a University Topper in Mechanical Engineering from Andhra University & has an MBA from Welingkar Institute of Management, Mumbai.',
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: '$2 Billion+ procurement handled' },
        { icon: <Award size={14} />, text: 'CPSM Certified (ISM, USA)' },
        { icon: <GraduationCap size={14} />, text: 'MBA – Welingkar Institute, Mumbai' },
        { icon: <Award size={14} />, text: 'Ex-Scientist, ISRO' },
      ],
      accentColor: '#0ea5e9',
    },
    {
      name: 'M N Rao',
      role: 'Co-Founder, Chief of BD & Finance',
      photo: 'https://procucev.com/wp-content/uploads/2026/02/WhatsApp-Image-2021-06-09-at-8.32.58-PM-e1646728070294.webp',
      tags: ['Co-Founder', 'Chief BD & Finance', '20+ Years Experience', 'Chartered Accountant'],
      shortBio:
        'An Expert Commercial Professional with more than 20 years of industry experience. Successfully driven profitability of retail stores with a business turnover of ₹3,000 Cr and handled ₹1,000 Cr procurement across Capex and Opex cost segments.',
      fullBio: [
        'An Expert Commercial Professional with more than 20 years of industry experience, he has handled Procurement, Inventory and Commercial departments from scratch until they transform to become the best in class.',
        'During his career, he has successfully driven profitability of retail stores with a business turnover of ₹3,000 Cr and handled ₹1,000 Cr procurement across Capex and Opex cost segments.',
        'His strength lies in his passion towards setting up processes and designing customer centric solutions. During his experience with Landmark Group, India as a Head of Project Commercial, he had implemented industry best procurement practices and set benchmarking prices for all Capex Procurements.',
        'His deep understanding and experience in formulating and implementing financial systems and controls and customer engagement are the key driving forces for Procucev. He holds a Bachelor\'s Degree in Commerce and is a Chartered Accountant.',
      ],
      highlights: [
        { icon: <Briefcase size={14} />, text: '₹1,000 Cr+ procurement handled' },
        { icon: <Award size={14} />, text: 'Chartered Accountant (CA)' },
        { icon: <GraduationCap size={14} />, text: 'B.Com + CA' },
        { icon: <Briefcase size={14} />, text: 'Ex-Landmark Group India' },
      ],
      accentColor: '#10b981',
    },
  ];

  return (
    <section className="v3-team-section section" id="team">
      <div className="container">
        
        {/* Header */}
        <div className="v3-section-header text-center">
          <div className="badge-tag-pill">
            <Users size={14} className="icon-blue" /> Our Founders
          </div>
          <h2 className="v3-section-title">
            Procurement leaders, building <br />
            <span className="serif-italic text-brand-blue">procurement technology</span>
          </h2>
          <p className="v3-section-desc">
            Our leadership brings experience from ISRO, Landmark Group, IIM, and decades of enterprise procurement — combining deep domain expertise with a passion for AI-driven transformation.
          </p>
        </div>

        {/* 2 Leader Cards */}
        <div className="team-founders-grid">
          {leadership.map((member, idx) => {
            const isExpanded = expanded[idx];
            return (
              <div
                key={idx}
                className="team-founder-card"
              >
                {/* Photo + Name Header */}
                <div className="team-card-header">
                  <div className="team-photo-wrap" style={{ borderColor: member.accentColor }}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="team-photo"
                      loading="lazy"
                    />
                  </div>
                  <div className="team-name-block">
                    <h3 className="team-leader-name">{member.name}</h3>
                    <div className="team-leader-role" style={{ color: member.accentColor }}>
                      {member.role}
                    </div>
                    <div className="team-tags">
                      {member.tags.map((tag, ti) => (
                        <span key={ti} className="team-tag-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="team-highlights">
                  {member.highlights.map((h, hi) => (
                    <div key={hi} className="team-highlight-item">
                      <span className="team-hl-icon" style={{ color: member.accentColor }}>{h.icon}</span>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bio Block */}
                <div className="team-bio-block">
                  <p className="team-bio-para">{member.shortBio}</p>

                  {isExpanded && (
                    <div className="team-bio-expanded">
                      {member.fullBio.slice(1).map((para, pi) => (
                        <p key={pi} className="team-bio-para">{para}</p>
                      ))}
                    </div>
                  )}

                  <button
                    className="team-expand-btn"
                    onClick={() => setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    style={{ color: member.accentColor }}
                  >
                    {isExpanded ? (
                      <>Read Less <ChevronUp size={15} /></>
                    ) : (
                      <>Read Full Bio <ChevronDown size={15} /></>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .v3-team-section {
          background: #f8fafc;
          padding: 96px 0;
          border-top: 1px solid var(--border-light);
        }

        .team-founders-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .team-founder-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .team-founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.09);
          border-color: #cbd5e1;
        }

        .team-card-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .team-photo-wrap {
          width: 96px;
          height: 96px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid transparent;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .team-name-block {
          flex: 1;
          min-width: 0;
        }
        .team-leader-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .team-leader-role {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .team-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .team-tag-chip {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 999px;
        }

        .team-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
        }
        .team-highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }
        .team-hl-icon {
          flex-shrink: 0;
          display: flex;
        }

        .team-bio-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .team-bio-para {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.65;
        }
        .team-bio-expanded {
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.3s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .team-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          margin-top: 4px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 992px) {
          .team-founders-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
