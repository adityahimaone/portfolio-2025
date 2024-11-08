'use client';

import { ThemeProvider } from 'next-themes';

const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Theme;
