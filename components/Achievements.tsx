"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrophyOutlined, PlaySquareOutlined, TeamOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

export default function Achievements() {
  const cards = [
    {
      icon: <SafetyCertificateOutlined />,
      title: 'Secure App Dev',
      desc: 'Developed multiple robust applications with a strong focus on security, cryptography, and data protection.'
    },
    {
      icon: <TeamOutlined />,
      title: 'Community Service',
      desc: 'Led a project analyzing and improving internet usage patterns in rural villages to promote digital inclusion.'
    },
    {
      icon: <PlaySquareOutlined />,
      title: 'Tech Content Creation',
      desc: 'Active content creator sharing knowledge on technology education, cybersecurity awareness, and tech discussions.'
    },
    {
      icon: <TrophyOutlined />,
      title: 'Technical Excellence',
      desc: 'Recognized for building complex, reliable systems like the Java Secure Chat App and FortiChat.'
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card"
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--neon-blue)', marginBottom: '1rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
