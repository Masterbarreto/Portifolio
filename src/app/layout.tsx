import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Pedro Henrique Vieira Barreto | MasterDev Portfolio',
  description: 'Backend Developer | IoT Student | APIs & AI Automation. Explore my projects and skills.',
  keywords: ['Backend Developer', 'IoT', 'API', 'AI Automation', 'Node.js', 'Portfolio', 'Pedro Henrique Vieira Barreto', 'Masterbarreto'],
  authors: [{ name: 'Pedro Henrique Vieira Barreto' }],
  creator: 'Pedro Henrique Vieira Barreto',
  openGraph: {
    title: 'Pedro Henrique Vieira Barreto | MasterDev Portfolio',
    description: 'Backend Developer | IoT Student | APIs & AI Automation.',
    url: 'https://your-domain.com', // To be updated with the actual domain
    siteName: 'MasterDev Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630', // Replace with a real OG image
        width: 1200,
        height: 630,
        alt: 'Pedro Henrique Vieira Barreto Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Henrique Vieira Barreto | MasterDev Portfolio',
    description: 'Backend Developer | IoT Student | APIs & AI Automation.',
    creator: '@masterbarreto', // Replace with actual Twitter handle
    images: ['https://picsum.photos/seed/twitter-image/1200/630'], // Replace
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, spaceGrotesk.variable, 'font-body bg-background text-foreground antialiased')}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
