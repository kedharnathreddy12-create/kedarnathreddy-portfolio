import type { Metadata } from 'next';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kakanuru Kedharnath Reddy | AI/ML Student, Full Stack Developer & Tech Content Creator',
  description: 'Portfolio of Kakanuru Kedharnath Reddy, an AI/ML student, Full Stack Developer, and Tech Content Creator. Passionate about building modern web applications and exploring Artificial Intelligence.',
  keywords: ['Kakanuru Kedharnath Reddy', 'AI/ML Student', 'Full Stack Developer', 'Tech Content Creator', 'Artificial Intelligence', 'Next.js', 'React', 'TypeScript', 'Software Engineering'],
  authors: [{ name: 'Kakanuru Kedharnath Reddy' }],
  openGraph: {
    title: 'Kakanuru Kedharnath Reddy | AI/ML Student & Full Stack Developer',
    description: 'Portfolio of Kakanuru Kedharnath Reddy, an AI/ML student, Full Stack Developer, and Tech Content Creator.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Kakanuru Kedharnath Reddy Portfolio',
    images: [
      {
        url: '/hero-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Kakanuru Kedharnath Reddy',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
