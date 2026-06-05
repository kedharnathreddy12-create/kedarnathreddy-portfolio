import type { Metadata } from 'next';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kakanuru Kedarnath Reddy | Cybersecurity & Full Stack Developer',
  description: 'Portfolio of Kakanuru Kedarnath Reddy. Cybersecurity Enthusiast, Full Stack Developer, and Creator of FortiChat. Specializing in secure communication systems and modern web technologies.',
  keywords: ['Kakanuru Kedarnath Reddy', 'Cybersecurity', 'Full Stack Developer', 'FortiChat', 'Next.js', 'React', 'Java', 'Ethical Hacking', 'Software Engineering'],
  authors: [{ name: 'Kakanuru Kedarnath Reddy' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
