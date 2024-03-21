import '@/assets/css/globals.css';
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
        <main>{children}</main>
      </body>
    </html>
  );
}
