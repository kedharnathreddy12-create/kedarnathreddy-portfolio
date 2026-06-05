"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Development',
    items: ['Java', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Supabase'],
    color: 'var(--neon-blue)'
  },
  {
    category: 'Tools & Security',
    items: ['Git & GitHub', 'Linux', 'Cybersecurity', 'Content Creation'],
    color: 'var(--neon-purple)'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass-card" style={{ padding: '2rem', borderTop: `3px solid ${skillGroup.color}` }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{skillGroup.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <li key={i} style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: 'var(--text-main)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }} className="skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .skill-item:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}
