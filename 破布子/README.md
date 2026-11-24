# 左鎮・破布子｜品牌電商與食農體驗

使用 Next.js App Router、TypeScript 與 Tailwind CSS 建置的響應式品牌網站。商品、食譜、故事工序及體驗資料位於 `data/`；購物車、預購通知與體驗預約會儲存在訪客瀏覽器的 localStorage。結帳提供配送、付款選擇及訂單確認憑證的前端模擬，沒有實際收款或出貨功能。

## 本機開發

需求：Node.js 20 或更新的 LTS 版本、npm。

```bash
npm install
npm run dev
```

開啟 http://localhost:3000。建立 production build 並啟動：

```bash
npm run build
npm start
```

Next.js server 會監聽 `0.0.0.0`，使用 Render 提供的 `PORT` 環境變數，預設為 3000。

## 部署至 GitHub 與 Render

1. 在 GitHub 建立空白 repository，將本專案推送：

   ```bash
   git init
   git add .
   git commit -m "Build Zuozhen Poo Tsai storefront"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<repository>.git
   git push -u origin main
   ```

2. 登入 Render，選 **New → Blueprint** 並連結該 GitHub repository。
3. Render 會讀取根目錄的 `render.yaml`，建立名為 `zuozhen-poo-tsai` 的 Web Service；確認 plan 後按 **Apply**。
4. Blueprint 使用 `npm install && npm run build` 建置、`npm start` 啟動。Render 會在部署時設定 `PORT`，無須額外設定環境變數。
5. 部署完成後使用 Render 提供的 `onrender.com` 網址檢視網站。後續推送至已連結分支時，Render 會自動部署。

## 專案頁面

- `/` 品牌首頁、採收倒數、預購通知、商品與食譜預覽
- `/story` 左鎮風土、飲食文化、九道職人工序
- `/shop`、`/shop/jar`、`/shop/dry`、`/shop/gift` 商城與商品詳情
- `/recipes` 三道經典料理與一鍵加入破布子
- `/experience` 體驗日期、場次、人數及預約確認
- `/checkout` 常溫／冷藏配送提示、模擬付款及訂單憑證

## 圖片與資料說明

照片使用 Unsplash 圖片 URL，需有可用的外部網路連線。圖片載入失敗時會呈現大地色佔位。商品與內容採 TypeScript 靜態資料；使用者狀態儲存在各自瀏覽器，因此清除瀏覽器資料會清除購物車、預購登記和預約狀態。這份展示網站不依賴資料庫。
