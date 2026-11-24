import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { earth: '#4A3525', bark: '#6B4E38', fruit: '#8C9A46', gold: '#B5A642', chalk: '#F9F7F2', cream: '#EFECE6', mango: '#E07A38' }, fontFamily: { serif: ['var(--font-serif)', 'serif'], sans: ['var(--font-sans)', 'sans-serif'] } } }, plugins: [] };
export default config;
