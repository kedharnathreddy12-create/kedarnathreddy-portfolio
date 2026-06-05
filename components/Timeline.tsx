"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline as AntTimeline } from 'antd';
import { CodeOutlined, SafetyOutlined, MessageOutlined, TrophyOutlined } from '@ant-design/icons';

export default function Timeline() {
  const items = [
    {
      color: 'var(--neon-blue)',
      content: (
        <div style={{ paddingBottom: '2rem' }}>
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Java Development Foundation</h4>
          <p style={{ color: 'var(--text-muted)' }}>Started programming journey with Java, building secure desktop chat applications and learning multithreading and socket programming.</p>
        </div>
      ),
      icon: <CodeOutlined style={{ fontSize: '1.2rem', color: 'var(--neon-blue)' }} />,
    },
    {
      color: '#00ffaa',
      content: (
        <div style={{ paddingBottom: '2rem' }}>
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Transition to Cybersecurity</h4>
          <p style={{ color: 'var(--text-muted)' }}>Developed a deep passion for ethical hacking, Linux systems, and network security. Began researching cryptographic algorithms and secure architectures.</p>
        </div>
      ),
      icon: <SafetyOutlined style={{ fontSize: '1.2rem', color: '#00ffaa' }} />,
    },
    {
      color: 'var(--neon-purple)',
      content: (
        <div style={{ paddingBottom: '2rem' }}>
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Full Stack & Web Technologies</h4>
          <p style={{ color: 'var(--text-muted)' }}>Expanded skill set to include modern web development: React, Next.js, Node.js, and Supabase to build scalable, full-stack applications.</p>
        </div>
      ),
      icon: <CodeOutlined style={{ fontSize: '1.2rem', color: 'var(--neon-purple)' }} />,
    },
    {
      color: 'var(--neon-blue)',
      content: (
        <div style={{ paddingBottom: '0' }}>
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Creator of FortiChat</h4>
          <p style={{ color: 'var(--text-muted)' }}>Combining software engineering and cybersecurity expertise to architect and build a secure, end-to-end encrypted messaging platform.</p>
        </div>
      ),
      icon: <MessageOutlined style={{ fontSize: '1.2rem', color: 'var(--neon-blue)' }} />,
    }
  ];

  return (
    <section id="timeline" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Journey</h2>
          
          <div style={{ maxWidth: '800px', margin: '3rem auto 0', padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
            <AntTimeline mode="alternate" items={items} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
