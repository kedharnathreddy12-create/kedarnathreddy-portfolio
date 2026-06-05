"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button, Dropdown } from 'antd';
import { SunOutlined, MoonOutlined, DesktopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: '32px', height: '32px' }} />;
  }

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: 'Light',
      icon: <SunOutlined />,
      onClick: () => setTheme('light'),
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <MoonOutlined />,
      onClick: () => setTheme('dark'),
    },
    {
      key: 'system',
      label: 'System',
      icon: <DesktopOutlined />,
      onClick: () => setTheme('system'),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
      <Button 
        type="text" 
        icon={theme === 'dark' ? <MoonOutlined /> : theme === 'light' ? <SunOutlined /> : <DesktopOutlined />} 
        style={{ color: 'var(--text-main)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      />
    </Dropdown>
  );
}
