import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/components/store';
import { Header, Footer } from '@/components/chrome';
export const metadata: Metadata = { title: { default: '台南左鎮破布子｜惡地職人柴燒手作', template: '%s｜台南左鎮破布子' }, description: '走進台南左鎮惡地，品嚐百年職人柴燒破布子。選購樹子料理、探索破布子蒸魚食譜，預約盛夏食農體驗。', keywords: ['台南左鎮破布子', '破布子蒸魚食譜', '樹子料理', '左鎮食農體驗'] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-Hant"><body><StoreProvider><Header />{children}<Footer /></StoreProvider></body></html>; }
