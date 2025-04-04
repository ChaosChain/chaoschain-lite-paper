import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
} 