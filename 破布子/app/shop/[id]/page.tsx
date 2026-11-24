import type { Metadata } from 'next';
import { ProductPage } from '@/components/site';
export const dynamicParams = false;
export function generateStaticParams() { return [{id:'jar'},{id:'dry'},{id:'gift'}]; }
export async function generateMetadata({ params }: { params: {id:string} }): Promise<Metadata> { const names:Record<string,string>={jar:'職人柴燒罐裝破布子',dry:'古法收乾乾塊破布子',gift:'盛夏破布子愛文芒果禮盒'}; return {title:names[params.id]||'商品詳情',description:`${names[params.id]||'左鎮職人破布子'}｜台南左鎮手作，探索樹子料理的甘醇滋味。`}; }
export default function Product({params}:{params:{id:string}}) { return <ProductPage id={params.id}/>; }
