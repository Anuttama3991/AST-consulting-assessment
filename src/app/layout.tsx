import type { Metadata } from 'next';
import './globals.css';
import { Navbar, SiteFooter } from '@/components';

export const metadata: Metadata = {
  title: {
    default: 'हिंदुस्तान लाइव - ताज़ा हिंदी समाचार',
    template: '%s | हिंदुस्तान लाइव',
  },
  description: 'भारत का विश्वसनीय हिंदी समाचार पोर्टल। राष्ट्रीय, अंतर्राष्ट्रीय, खेल, व्यापार, मनोरंजन की ताज़ा खबरें पढ़ें।',
  keywords: ['हिंदी समाचार', 'भारत समाचार', 'ताज़ा खबरें', 'Hindi News', 'India News'],
  authors: [{ name: 'हिंदुस्तान लाइव' }],
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    siteName: 'हिंदुस्तान लाइव',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="min-h-screen bg-gray-50 flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
