import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Коучинг с нуля | Алексей Якубан',
  description: 'Попробуйте коучинг за 5 уроков. Программа «Коучинг с нуля» от Алексея Якубана.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
