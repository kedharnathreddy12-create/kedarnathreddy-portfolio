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
    url: '#TODO_UPDATE_LINKEDIN_URL',
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
          
          <div className="glass-card contact-card">
            <p className="contact-desc">
              Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open. 
              Connect with me on social media or send an email!
            </p>
            
            <div className="social-links-grid">
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
                  className="social-card social-btn"
                  style={{
                    color: 'var(--text-main)',
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

      <style>{`
        .contact-card {
          padding: 1.5rem;
          max-width: 100%;
          margin: 0 auto;
          border-top: 4px solid var(--neon-blue);
          box-sizing: border-box;
        }
        .contact-desc {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .social-links-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          justify-content: center;
          min-height: 48px; /* Touch target */
        }
        @media (min-width: 768px) {
          .contact-card {
            padding: 3rem;
          }
          .contact-desc {
            font-size: 1.2rem;
            margin-bottom: 3rem;
          }
          .social-links-grid {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
          .social-btn {
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
