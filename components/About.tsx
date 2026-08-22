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
                I’m <strong className="gradient-text" style={{ fontWeight: 700 }}>Kakanuru Kedharnath Reddy</strong>, a final-year B.Tech student specializing in Artificial Intelligence & Machine Learning, a Full Stack Developer, and a Tech Content Creator.
              </p>
              <p>
                I enjoy building practical web applications, experimenting with AI-powered solutions, and creating technology-focused content that makes complex concepts easier to understand.
              </p>
              <p>
                My current work focuses on modern technologies such as Next.js, React, TypeScript, Supabase, AI/ML, and Java, with an emphasis on creating clean, useful, and production-ready applications.
              </p>
              <p>
                I’m passionate about continuously improving my skills in software development, AI, cybersecurity, and emerging technologies.
              </p>
            </div>
            
            <div className="about-stats-grid">
              <div>
                <h3 className="gradient-text stat-value">4th Year</h3>
                <p style={{ color: 'var(--text-muted)' }}>B.Tech AI & ML</p>
              </div>
              <div>
                <h3 className="gradient-text stat-value">Full Stack</h3>
                <p style={{ color: 'var(--text-muted)' }}>Development</p>
              </div>
              <div>
                <h3 className="gradient-text stat-value">AI/ML</h3>
                <p style={{ color: 'var(--text-muted)' }}>Enthusiast</p>
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
