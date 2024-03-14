import '@/assets/css/globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Deren | Portfolio',
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
