import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import '../styles/globals.css';
import { BASE_METADATA } from '@/configs/seo';
import { Metadata } from 'next';

export const metadata: Metadata = BASE_METADATA;

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang="id" suppressHydrationWarning>
        <body>
            <RootProvider>{children}</RootProvider>
        </body>
    </html>;
}
