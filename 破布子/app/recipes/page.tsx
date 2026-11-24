import type { Metadata } from 'next';
import { RecipesPage } from '@/components/site';
export const metadata: Metadata = { title: '破布子蒸魚食譜與樹子料理', description: '破布子蒸鮮魚、古法破布子雞湯、九層塔乾塊煎蛋，附食材清單與一鍵購齊樹子料理食譜。' };
export default function Recipes() { return <RecipesPage />; }
