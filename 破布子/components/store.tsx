'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { experienceTicket, products } from '@/data/products';
type CartLine = { id: string; qty: number }; type Booking = { id: string; date: string; session: string; count: number; name: string; email: string; phone: string; total: number };
type Store = { cart: CartLine[]; add: (id: string, qty?: number) => void; update: (id: string, qty: number) => void; remove: (id: string) => void; clear: () => void; cartOpen: boolean; setCartOpen: (v: boolean) => void; toast: string; book: Booking | null; setBook: (b: Booking | null) => void; notify: (email: string) => boolean };
const Ctx = createContext<Store | null>(null);
export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]); const [cartOpen, setCartOpen] = useState(false); const [toast, setToast] = useState(''); const [book, setBook] = useState<Booking | null>(null); const [ready, setReady] = useState(false);
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem('poo-tsai-cart') || '[]')); setBook(JSON.parse(localStorage.getItem('poo-tsai-booking') || 'null')); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) { localStorage.setItem('poo-tsai-cart', JSON.stringify(cart)); localStorage.setItem('poo-tsai-booking', JSON.stringify(book)); } }, [cart, book, ready]);
  const add = (id: string, qty = 1) => { setCart(prev => { const found = prev.find(x => x.id === id); return found ? prev.map(x => x.id === id ? { ...x, qty: x.qty + qty } : x) : [...prev, { id, qty }]; }); setToast('已加入購物車'); setCartOpen(true); };
  useEffect(() => { if (toast) { const timer = setTimeout(() => setToast(''), 2600); return () => clearTimeout(timer); } }, [toast]);
  const value = useMemo(() => ({ cart, add, update: (id: string, qty: number) => setCart(prev => qty < 1 ? prev.filter(x => x.id !== id) : prev.map(x => x.id === id ? { ...x, qty } : x)), remove: (id: string) => setCart(prev => prev.filter(x => x.id !== id)), clear: () => setCart([]), cartOpen, setCartOpen, toast, book, setBook, notify: (email: string) => { try { const list: string[] = JSON.parse(localStorage.getItem('poo-tsai-notifications') || '[]'); if (list.includes(email)) return false; localStorage.setItem('poo-tsai-notifications', JSON.stringify([...list, email])); return true; } catch { return false; } } }), [cart, cartOpen, toast, book]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useStore() { const ctx = useContext(Ctx); if (!ctx) throw new Error('StoreProvider missing'); return ctx; }
export function cartDetails(cart: CartLine[]) { return cart.map(line => ({ ...line, product: line.id === 'experience' ? experienceTicket : products.find(p => p.id === line.id)! })).filter(x => x.product); }
