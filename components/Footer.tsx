import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--bg-darker)', 
      padding: '2rem 0', 
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>
            <span className="gradient-text">Kakanuru Kedarnath Reddy</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
            Building secure communication systems and modern web applications with a focus on privacy and performance.
          </p>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} Kakanuru Kedarnath Reddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
