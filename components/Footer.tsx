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
            <span className="gradient-text">Kakanuru Kedharnath Reddy</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
            Building modern web applications, exploring AI, and sharing technology with the world.
          </p>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1rem' }}>
            &copy; 2026 Kakanuru Kedharnath Reddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
