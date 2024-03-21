import '@/assets/css/globals.css';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Deren Luu | Portfolio',
  description: 'Deren Luu Portfolio',
  icons: {
    icon: [
      {
        url: '/wavinghand.svg',
        href: '/wavinghand.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
