import type { Metadata } from 'next';
import { CheckoutPage } from '@/components/site';
export const metadata: Metadata = { title: '模擬結帳', description: '完成台南左鎮破布子訂單配送與模擬付款。' };
export default function Checkout() { return <CheckoutPage />; }
