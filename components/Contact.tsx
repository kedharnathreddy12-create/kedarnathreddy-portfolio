"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { message } from 'antd';
import { 
  GithubOutlined, 
  LinkedinOutlined, 
  InstagramOutlined, 
  YoutubeOutlined, 
  MailOutlined 
} from '@ant-design/icons';

const socials = [
  {
    name: 'GitHub',
    icon: <GithubOutlined />,
    url: 'https://github.com/kedharnathreddy12-create',
    color: 'var(--text-main)' // Adapts to light/dark
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinOutlined />,
    url: 'https://www.linkedin.com/',
    color: '#0a66c2' // LinkedIn Blue
  },
  {
    name: 'Instagram',
    icon: <InstagramOutlined />,
    url: 'https://www.instagram.com/techtuberkedhar?igsh=azZtd3V5aGduZXY2',
    color: '#e1306c' // Instagram Pink/Red
  },
  {
    name: 'YouTube',
    icon: <YoutubeOutlined />,
    url: 'https://youtube.com/@techtuberkedhar?si=A6vCuiPvr2IK6kT7',
    color: '#ff0000' // YouTube Red
  },
  {
    name: 'Email',
    icon: <MailOutlined />,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=techtuberkedhar@gmail.com&su=Portfolio%20Contact&body=Hello%20Kedarnath,',
    color: '#ea4335' // Gmail Red
  }
];

export default function Contact() {
  const handleSocialClick = (socialName: string) => {
    if (socialName === 'Email') {
      navigator.clipboard.writeText('techtuberkedhar@gmail.com');
      message.success('Email copied to clipboard!');
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="glow-circle-blue" style={{ top: '30%', left: '20%' }}></div>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span style={{ color: 'var(--neon-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>What's Next?</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>Get In Touch</h2>
          
          <div className="glass-card" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--neon-blue)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.6 }}>
              Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open. 
              Connect with me on social media or send an email!
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              {socials.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(social.name)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="social-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1rem 1.5rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ fontSize: '1.5rem', color: social.color, display: 'flex' }}>
                    {social.icon}
                  </span>
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
