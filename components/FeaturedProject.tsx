"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LockOutlined, RocketOutlined } from '@ant-design/icons';

export default function FeaturedProject() {
  return (
    <section id="fortichat" className="section-padding" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      <div className="glow-circle-blue" style={{ top: '10%', left: '-10%' }}></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--neon-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Flagship Project</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>FortiChat</h2>
          </div>

          <div className="glass-card" style={{ padding: '4rem', border: '1px solid var(--neon-blue)', boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '4rem', color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
              <LockOutlined />
            </div>
            <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Secure Communication Platform</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              FortiChat is a secure communication platform currently under development. The project reflects my interest in software engineering, cybersecurity, secure communication systems, and modern web technologies.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(0, 240, 255, 0.1)', padding: '0.8rem 1.5rem', borderRadius: '30px', color: 'var(--neon-blue)', fontWeight: 600 }}>
              <RocketOutlined /> Currently In Development
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
