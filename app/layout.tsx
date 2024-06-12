import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import StyledComponentsRegistry from '@/lib/registry';
import CustomCursor from '@/components/common/Cursor';

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
            <CustomCursor />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
