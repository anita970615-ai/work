import type { Metadata } from 'next';
import { StoryPage } from '@/components/site';
export const metadata: Metadata = { title: '左鎮風土故事', description: '認識台南左鎮青灰岩惡地、西拉雅飲食文化與九道職人柴燒破布子工序。' };
export default function Story() { return <StoryPage />; }
