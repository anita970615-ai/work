export type Product = { id: string; name: string; subtitle: string; price: number; weight: string; category: string; description: string; image: string; badge?: string; shipping: 'ambient' | 'chilled' | 'experience'; stock: number };
export const products: Product[] = [
  { id: 'jar', name: '職人柴燒罐裝醬汁破布子', subtitle: '蒸魚煮湯專用｜140g 玻璃罐', price: 280, weight: '140g（固形物 70g）', category: '醬汁罐裝', description: '左鎮當季破布子，柴火慢熬三小時。以黑豆蔭油、冰糖與甘草細細調味，蒸魚煮湯一匙入魂。無添加防腐劑，常溫保存。', image: 'photo-1473116763249-2faaef81ccda', badge: '職人經典', shipping: 'ambient', stock: 120 },
  { id: 'dry', name: '古法收乾乾塊破布子', subtitle: '煎蛋拌炒專用｜150g 真空包', price: 320, weight: '150g', category: '乾塊真空包', description: '遵循古法加鹽燜煮、慢火收乾，果粒紮實帶有自然鹹香。捏碎加入蛋液與九層塔，輕鬆重現灶跤古早味。', image: 'photo-1603903631918-a6c8a9fbc8c3', shipping: 'ambient', stock: 80 },
  { id: 'gift', name: '左鎮破布子 × 愛文芒果季節禮盒', subtitle: '盛夏雙果限量｜預購組合', price: 880, weight: '破布子 140g × 2＋愛文芒果', category: '季節禮盒', description: '夏日果香相遇的季節限定。左鎮手作破布子搭配在欉黃愛文芒果，將惡地的濃郁與盛夏的甜，送給重要的人。', image: 'photo-1553279768-865429fa0078', badge: '盛夏限定', shipping: 'chilled', stock: 40 }
];
export const experienceTicket: Product = { id: 'experience', name: '左鎮食農體驗票券', subtitle: '預約完成後，現場憑證報到', price: 1280, weight: '每位一張', category: '食農體驗', description: '左鎮惡地導覽、破布子採摘、大灶見學與山城餐食。', image: 'photo-1472396961693-142e6e269027', shipping: 'experience', stock: 40 };
