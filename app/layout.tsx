import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang="id" suppressHydrationWarning>
        <body>
            <RootProvider>{children}</RootProvider>
        </body>
    </html>;
}
