"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { DownloadOutlined, ProjectOutlined, MessageOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: '80px' 
    }}>
      <div className="glow-circle-blue" style={{ top: '20%', left: '10%' }}></div>
      <div className="glow-circle-purple" style={{ bottom: '10%', right: '10%' }}></div>
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, var(--neon-blue), var(--neon-purple))',
            padding: '4px',
            marginBottom: '1rem'
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'var(--bg-darker)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <Image 
              src="/profile.jpg" 
              alt="Kakanuru Kedarnath Reddy"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--neon-blue)', borderRadius: '30px', color: 'var(--neon-blue)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            🎥 Tech Content Creator
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            Hi, I'm <br className="mobile-break" />
            <span className="gradient-text">Kakanuru Kedarnath Reddy</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', fontWeight: 400 }}>
            Tech Content Creator | Cybersecurity Enthusiast | Full Stack Developer | Creator of FortiChat
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}
        >
          <Button 
            type="primary" 
            size="large" 
            icon={<ProjectOutlined />}
            href="#fortichat"
            style={{ 
              background: 'var(--neon-blue)', 
              color: '#000', 
              fontWeight: 600,
              border: 'none',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)'
            }}
          >
            View Projects
          </Button>
          <Button 
            size="large" 
            icon={<DownloadOutlined />}
            href="#"
            style={{ 
              background: 'transparent',
              borderColor: 'var(--neon-purple)',
              color: 'var(--text-main)',
              fontWeight: 600,
            }}
            className="neon-hover"
          >
            Download Resume
          </Button>
          <Button 
            size="large" 
            icon={<MessageOutlined />}
            href="#contact"
            style={{ 
              background: 'transparent',
              borderColor: 'var(--text-muted)',
              color: 'var(--text-main)',
            }}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      <style>{`
        .neon-hover:hover {
          box-shadow: 0 0 15px rgba(189, 0, 255, 0.4);
          color: #fff !important;
          border-color: var(--neon-purple) !important;
        }
        @media (min-width: 768px) {
          .mobile-break { display: none; }
          h1 { font-size: 5rem !important; }
          h2 { font-size: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
