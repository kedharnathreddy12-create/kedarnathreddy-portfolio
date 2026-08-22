"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DesktopOutlined, RobotOutlined, VideoCameraOutlined, ReadOutlined } from '@ant-design/icons';

export default function WhatIDo() {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'Building modern, responsive web applications using React, Next.js, TypeScript, databases, APIs, and backend technologies.',
      icon: <DesktopOutlined />,
      color: 'var(--neon-blue)'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Exploring Artificial Intelligence and Machine Learning concepts and integrating AI capabilities into practical applications.',
      icon: <RobotOutlined />,
      color: 'var(--neon-purple)'
    },
    {
      title: 'Tech Content Creation',
      description: 'Creating technology-focused content covering AI, software, smartphones, tools, tutorials, and emerging technologies.',
      icon: <VideoCameraOutlined />,
      color: 'var(--neon-blue)'
    },
    {
      title: 'Continuous Learning',
      description: 'Continuously improving my knowledge in software engineering, AI, cybersecurity, cloud technologies, and modern development practices.',
      icon: <ReadOutlined />,
      color: 'var(--neon-purple)'
    }
  ];

  return (
    <section id="what-i-do" className="section-padding" style={{ position: 'relative', background: 'var(--bg-darker)' }}>
      <div className="glow-circle-purple" style={{ bottom: '20%', left: '5%' }}></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--neon-purple)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Expertise</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>What I Do</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card service-card"
                style={{
                  borderTop: `3px solid ${service.color}`,
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  color: service.color, 
                  marginBottom: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .service-card {
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

