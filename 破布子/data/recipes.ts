export type Recipe = { id: string; title: string; subtitle: string; time: string; servings: string; image: string; productIds: string[]; ingredients: string[]; steps: string[] };
export const recipes: Recipe[] = [
  { id: 'fish', title: '破布子蒸鮮魚', subtitle: '一匙甘醇，蒸出海味鮮甜', time: '20 分鐘', servings: '2 人份', image: 'photo-1519708227418-c8fd9a32b7a2', productIds: ['jar'], ingredients: ['新鮮鱸魚 1 尾', '職人柴燒破布子 2 大匙', '薑絲、米酒適量'], steps: ['鱸魚抹薄鹽靜置 10 分鐘，擦乾表面水分。', '魚身鋪薑絲，淋上破布子醬汁與米酒。', '電鍋外鍋放一杯水，蒸約 15 分鐘至熟即可。'] },
  { id: 'soup', title: '古法破布子慢熬雞湯', subtitle: '時間熬出家的甘甜滋味', time: '2 小時', servings: '4 人份', image: 'photo-1547592180-85f173990554', productIds: ['jar'], ingredients: ['土雞半隻', '職人柴燒破布子 3 大匙', '薑片、當季筍片適量'], steps: ['雞肉汆燙洗淨，放入湯鍋加入薑片。', '加入破布子與足量清水，大火煮滾轉小火。', '慢燉約 2 小時至雞肉軟嫩，依口味調整鹹度。'] },
  { id: 'egg', title: '九層塔乾塊煎蛋', subtitle: '三分鐘上桌的古早好味', time: '10 分鐘', servings: '2 人份', image: 'photo-1525351484163-7529414344d8', productIds: ['dry'], ingredients: ['雞蛋 3 顆', '古法乾塊破布子 1 大匙', '新鮮九層塔一把'], steps: ['乾塊破布子稍微捏碎，九層塔切細。', '與雞蛋充分攪拌均勻，不需另加鹽。', '熱鍋下油，倒入蛋液煎至兩面金黃。'] }
];
