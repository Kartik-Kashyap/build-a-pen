import { type ReactElement } from 'react';

/**
 * Root layout — fullscreen game canvas, no header/footer.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <div className="w-full min-h-screen bg-background text-foreground">{children}</div>;
}
