"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOutlined, BankOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      <div className="glow-circle-purple" style={{ bottom: '10%', right: '10%' }}></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="glass-card edu-card" style={{ maxWidth: '800px', margin: '0 auto', borderLeft: '4px solid var(--neon-purple)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <BookOutlined className="edu-icon" />
              <h3 className="edu-title">
                Bachelor's Degree in Artificial Intelligence & Machine Learning (AI & ML) <br />
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Currently Pursuing)</span>
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <BankOutlined style={{ fontSize: '1.2rem', color: 'var(--neon-blue)', marginTop: '4px' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Institution:</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>DRKVSR Institute of Technology (DRKVSRIT), Kurnool</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <ClockCircleOutlined style={{ fontSize: '1.2rem', color: 'var(--neon-blue)', marginTop: '4px' }} />
                <div>
                  <strong style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>Academic Status:</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Completed 3rd Year, 2nd Semester</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--neon-blue)', marginBottom: '1rem', fontSize: '1.1rem' }}>Academic Overview</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                The B.Tech program in Artificial Intelligence and Machine Learning at DRKVSRIT provides a rigorous curriculum centered around modern computing technologies. The coursework emphasizes core computer science principles, advanced mathematics, and specialized AI/ML algorithms.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                DRKVSR Institute of Technology is dedicated to fostering technical excellence and analytical thinking, equipping students with the theoretical and practical knowledge required to engineer intelligent software systems and solve complex computational problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .edu-card {
          padding: 1.5rem;
          max-width: 100%;
          box-sizing: border-box;
        }
        .edu-icon {
          font-size: clamp(1.5rem, 4vw + 0.5rem, 2rem);
          color: var(--neon-purple);
          margin-top: 4px;
        }
        .edu-title {
          font-size: clamp(1.2rem, 3vw + 0.5rem, 1.8rem);
          color: var(--text-main);
          line-height: 1.4;
          word-break: break-word;
        }
        @media (min-width: 768px) {
          .edu-card {
            padding: 3rem;
          }
          .edu-icon {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
