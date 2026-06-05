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
          
          <div className="glass-card" style={{ padding: '3rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem', textAlign: 'center' }}>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ color: 'var(--text-muted)' }}>Commitment to Security</p>
              </div>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Full Stack</h3>
                <p style={{ color: 'var(--text-muted)' }}>Development Expertise</p>
              </div>
              <div>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>E2EE</h3>
                <p style={{ color: 'var(--text-muted)' }}>Architecture Specialist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
