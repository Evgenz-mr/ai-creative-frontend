import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inga — AI Creative Director',
  description: 'Creative direction, AI visuals and cinematic stories.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
