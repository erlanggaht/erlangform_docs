import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            nav={{
                title: (
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col text-left space-y-1">
                            <span className="font-bold text-lg tracking-tight text-fd-primary">
                                ErlangForm
                            </span>
                            <span className="text-xs text-fd-muted-foreground -mt-1">
                                Docs v1.0
                            </span>
                        </div>
                    </div>
                ),
            }}
        >
            {children}
        </DocsLayout>
    );
}
