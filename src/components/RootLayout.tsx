// src/components/RootLayout.tsx
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Add your common layout components here, like header, footer, etc. */}
      {children}
    </div>
  );
};

export default RootLayout;
