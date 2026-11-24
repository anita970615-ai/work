import type { Metadata } from 'next';
import { ShopPage } from '@/components/site';
export const metadata: Metadata = { title: '線上商城', description: '選購台南左鎮職人柴燒破布子、乾塊樹子與盛夏愛文芒果季節限定禮盒。' };
export default function Shop() { return <ShopPage />; }
