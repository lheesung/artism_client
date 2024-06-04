import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'artism',
  description: '예술인의 공간',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ThemeProvider
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
