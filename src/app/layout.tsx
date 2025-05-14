import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Rall Media Group | Premium Media & Technology Solutions',
  description: 'Rall Media Group offers premium media and technology solutions, from UGC to full-scale marketing services, website design, AI integration, and business management tools.',
  openGraph: {
    title: 'Rall Media Group | Premium Media & Technology Solutions',
    description: 'Premium media and technology solutions for modern businesses. Expert services in UGC, marketing, web design, AI integration, and business tools.',
    url: 'https://rallmediagroup.com',
    siteName: 'Rall Media Group',
    images: [
      {
        url: 'https://rallmediagroup.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}