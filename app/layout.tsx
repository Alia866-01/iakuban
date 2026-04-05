import type {Metadata} from 'next';
import './globals.css';
import { CookieBanner } from '@/components/ui/cookie-banner';

export const metadata: Metadata = {
  title: 'Iakuban Coaching Academy',
  description: 'Найдите своего коуча. Создайте легендарные результаты в жизни, бизнесе и карьере с помощью квалифицированного коуча ICF.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
