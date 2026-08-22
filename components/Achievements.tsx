"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RocketOutlined, PlaySquareOutlined, CodeOutlined, AppstoreOutlined } from '@ant-design/icons';

export default function Achievements() {
  const cards = [
    {
      icon: <RocketOutlined />,
      title: 'AI-Powered Applications',
      desc: 'Built practical applications integrating AI capabilities with modern web technologies.'
    },
    {
      icon: <CodeOutlined />,
      title: 'Full Stack Projects',
      desc: 'Developed complete web applications using modern frontend, backend, database, and deployment technologies.'
    },
    {
      icon: <PlaySquareOutlined />,
      title: 'Tech Content Creation',
      desc: 'Creating technology-focused content to educate, simplify concepts, and share useful technology information.'
    },
    {
      icon: <AppstoreOutlined />,
      title: 'Project Development',
      desc: 'Built and deployed projects including Nebula, Smart AI Resume Maker, and Gita Mitra.'
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', background: 'var(--bg-darker)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Achievements & Contributions</h2>
          </div>

          <div className="achievements-grid">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card achievement-card"
              >
                <div style={{ fontSize: '2.5rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .achievement-card {
          padding: 1.5rem;
          text-align: center;
          max-width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .achievement-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
