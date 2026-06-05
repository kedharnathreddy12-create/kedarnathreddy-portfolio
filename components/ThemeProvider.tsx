"use client";

import React, { useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render without strict theming until mounted to avoid hydration mismatch
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? '#00f0ff' : '#0284c7',
          colorInfo: isDark ? '#00f0ff' : '#0284c7',
          colorBgBase: isDark ? '#05070a' : '#ffffff',
          colorTextBase: isDark ? '#e2e8f0' : '#0f172a',
          fontFamily: "'Inter', sans-serif",
          borderRadius: 8,
        },
        components: {
          Card: {
            colorBgContainer: isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)',
            colorBorderSecondary: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
          },
          Timeline: {
            tailColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            dotBg: 'transparent',
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <AntdConfigProvider>
        {children}
      </AntdConfigProvider>
    </NextThemesProvider>
  );
}
