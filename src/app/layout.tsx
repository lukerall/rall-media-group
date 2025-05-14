import { Metadata } from 'next';
import { Playfair_Display, Raleway } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

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
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rall Media Group | Premium Media & Technology Solutions',
    description: 'Premium media and technology solutions for modern businesses. Expert services in UGC, marketing, web design, AI integration, and business tools.',
    images: ['https://rallmediagroup.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="font-body bg-royal-50 text-royal-900 dark:bg-royal-900 dark:text-royal-50 transition-colors duration-300">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YDFTHMD18L"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YDFTHMD18L');
            `,
          }}
        />
      </body>
    </html>
  );
}