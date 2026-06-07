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
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--neon-blue)', borderRadius: '30px', color: 'var(--neon-blue)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1rem' }}>
            🎥 Tech Content Creator
          </div>
          <h1 className="hero-title">
            Hi, I'm <br className="mobile-break" />
            <span className="gradient-text">Kakanuru Kedarnath Reddy</span>
          </h1>
          <h2 className="hero-subtitle">
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
            href="/Kedarnath_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
        .hero-title {
          font-size: clamp(2.5rem, 8vw + 1rem, 5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw + 0.5rem, 2rem);
          color: var(--text-muted);
          font-weight: 400;
        }
        .neon-hover:hover {
          box-shadow: 0 0 15px rgba(189, 0, 255, 0.4);
          color: #fff !important;
          border-color: var(--neon-purple) !important;
        }
        @media (min-width: 768px) {
          .mobile-break { display: none; }
        }
      `}</style>
    </section>
  );
}
