import type { Metadata } from 'next';
import { ExperiencePage } from '@/components/site';
export const metadata: Metadata = { title: '左鎮食農體驗預約', description: '預約台南左鎮食農體驗，走入惡地果園採破布子、見學大灶熬煮，品嚐蔡爸烤雞與當季竹筍。' };
export default function Experience() { return <ExperiencePage />; }
