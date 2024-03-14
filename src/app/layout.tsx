import '@/assets/css/globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Deren | Portfolio',
  description: 'Description of your portfolio',
  icons: {
    icon: [
      {
        url: '/assets/images/wavinghand.svg',
        href: '/assets/images/wavinghand.svg',
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
        <main>{children}</main>
      </body>
    </html>
  );
}
