import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Landing Page',
  description: 'LP de exemplo em Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
