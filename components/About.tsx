"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="glass-card about-card">
            <div className="about-text-content">
              <p>
                I am <strong className="gradient-text" style={{ fontWeight: 700 }}>Kakanuru Kedarnath Reddy</strong>, a cybersecurity enthusiast, software developer, and tech content creator passionate about building secure and reliable applications.
              </p>
              <p>
                I am currently focused on developing FortiChat, a secure communication platform, while continuously expanding my knowledge in software engineering, cybersecurity, and modern web technologies.
              </p>
              <p>
                Alongside development, I create technology-focused content to share knowledge, simplify complex concepts, and help others learn about technology and cybersecurity.
              </p>
            </div>
            
            <div className="about-stats-grid">
              <div>
                <h3 className="gradient-text stat-value">100%</h3>
                <p style={{ color: 'var(--text-muted)' }}>Commitment to Security</p>
              </div>
              <div>
                <h3 className="gradient-text stat-value">Full Stack</h3>
                <p style={{ color: 'var(--text-muted)' }}>Development Expertise</p>
              </div>
              <div>
                <h3 className="gradient-text stat-value">E2EE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Architecture Specialist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-card {
          padding: 1.5rem;
          margin-top: 2rem;
          max-width: 100%;
          box-sizing: border-box;
        }
        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-main);
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
          text-align: center;
        }
        .stat-value {
          font-size: clamp(1.8rem, 6vw + 0.5rem, 2.5rem);
          margin-bottom: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .about-card {
            padding: 3rem;
            margin-top: 3rem;
          }
          .about-text-content {
            font-size: 1.1rem;
            line-height: 1.8;
          }
          .about-stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            margin-top: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
