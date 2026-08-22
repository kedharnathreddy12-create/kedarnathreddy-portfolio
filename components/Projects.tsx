"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlobalOutlined, GithubOutlined, RocketOutlined, FileTextOutlined, BookOutlined } from '@ant-design/icons';

export default function Projects() {
  const projects = [
    {
      title: 'Nebula',
      description: 'A modern technology project focused on creating a powerful and intuitive digital experience using contemporary web technologies.',
      icon: <RocketOutlined />,
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      demoLink: 'https://nebulatrade.vercel.app/',
      githubLink: null,
      featured: true,
      color: 'var(--neon-blue)'
    },
    {
      title: 'Smart AI Resume Maker',
      description: 'An AI-powered resume-building platform that helps users create professional, ATS-friendly resumes with multiple templates, live preview, AI assistance, and PDF export.',
      icon: <FileTextOutlined />,
      tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'AI', 'Vercel'],
      demoLink: 'https://smart-ai-resume-maker.vercel.app/',
      githubLink: null,
      featured: false,
      color: 'var(--neon-purple)'
    },
    {
      title: 'Gita Mitra',
      description: 'A simple and interactive learning platform that explains the teachings of the Bhagavad Gita in an easy-to-understand way, with chapter-based learning and AI-powered assistance.',
      icon: <BookOutlined />,
      tech: ['Next.js', 'TypeScript', 'AI', 'Gemini', 'Tailwind CSS'],
      demoLink: 'https://gitamitra.vercel.app/',
      githubLink: null,
      featured: false,
      color: 'var(--neon-blue)'
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      <div className="glow-circle-blue" style={{ top: '10%', left: '-10%' }}></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--neon-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Portfolio</span>
            <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="glass-card project-card" 
                style={{ 
                  borderTop: `3px solid ${project.color}`, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  position: 'relative'
                }}
                whileHover={{ y: -5, boxShadow: `0 10px 30px ${project.color}33` }}
              >
                {project.featured && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0, 240, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', color: 'var(--neon-blue)', fontSize: '0.8rem', border: '1px solid var(--neon-blue)', fontWeight: 600 }}>
                    Featured
                  </div>
                )}
                
                <div className="project-thumbnail" style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%)`, height: '180px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '4rem', color: project.color, opacity: 0.8 }}>
                    {project.icon}
                  </div>
                </div>

                <h3 className="project-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: project.color, fontWeight: 500, fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="project-link">
                      <GlobalOutlined /> Live Demo →
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', transition: 'all 0.3s ease' }} className="project-link-hover">
                      <GithubOutlined /> Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .project-card {
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .project-link:hover {
          text-decoration: underline;
        }
        .project-link-hover:hover {
          color: var(--neon-purple) !important;
        }
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
          .project-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
