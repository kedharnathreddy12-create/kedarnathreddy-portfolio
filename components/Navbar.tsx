"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

import ThemeSwitcher from '@/components/ThemeSwitcher';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'FortiChat', href: '#fortichat' },
  { name: 'Skills', href: '#skills' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="nav-wrapper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          background: isScrolled ? 'rgba(10, 14, 23, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>
        <a href="#" className="gradient-text">KKR.</a>
      </div>

      <div className="nav-desktop" style={{ display: 'none' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500, transition: 'color 0.3s' }} className="nav-link">
              {link.name}
            </a>
          ))}
          <ThemeSwitcher />
        </div>
      </div>

      <div className="nav-mobile" style={{ display: 'block' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeSwitcher />
          <button 
            onClick={() => setDrawerVisible(true)} 
            style={{ background: 'none', border: 'none', color: 'inherit', padding: '10px', minHeight: '44px', minWidth: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            aria-label="Open Menu"
          >
            <MenuOutlined style={{ fontSize: '1.5rem' }} />
          </button>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ body: { background: 'var(--bg-darker)' }, header: { background: 'var(--bg-darker)' } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setDrawerVisible(false)}
              style={{ fontWeight: 500 }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </Drawer>

      <style>{`
        .nav-wrapper { padding: 1rem 1.2rem; }
        .nav-link:hover { color: var(--neon-blue); }
        .nav-link { min-height: 44px; display: inline-flex; alignItems: center; }
        @media (min-width: 768px) {
          .nav-wrapper { padding: 1rem 2rem; }
          .nav-desktop { display: block !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
