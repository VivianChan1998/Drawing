
![](https://i.imgur.com/WeSgCDS.png)
# Drawing - A new platform for creation
![](https://i.imgur.com/HeULyYo.png)
## How to start?
- `git clone https://github.com/VivianChan1998/midterm_Drawing.git`
- `cd midterm_Drawing`
- `npm install`
- `npm start`

## How to use?
- 首頁的三個區塊會隨機推薦使用者（但因為現在只有5個使用者，所以很容易有重複的）
- <b>註冊及上傳圖片後，都需要重新整理～</b>

## Details
![](https://i.imgur.com/aaMSjKO.png)
![](https://i.imgur.com/iswEgXN.png)
![](https://i.imgur.com/25P31Y0.png)
![](https://i.imgur.com/mh3j27N.png)
![](https://i.imgur.com/kxK0d67.png)

## Reference

- based on burkeholland/express-react-starter
https://github.com/burkeholland/express-react-starter
- logo: 自己設計
- 插畫來自：我和我的幾個會畫畫的朋友

## My Contribution
### Coding
- `src/`及`server/routes/`裡面的code，除了starter裡面初始設定的檔案（大約各有一兩個），其他都是我寫的。
- 因為想要從頭練習，所以用毫無功能的react-express starter從頭開始寫，沒有使用任何模板
- <b>純手刻css</b>

#### 遇到的挑戰
- 上傳圖片要使用Imgur API，從拿到Client ID, Client Secret, 到使用Postman生成token，全部都要從頭摸索，花了很多時間。
- 一開始連結前端跟後端為求方便使用了local的json檔案，後來因為身體狀況不好，沒辦法跟在自己的進度上，來不及修改成使用MongoDB，覺得很遺憾。
- css中在整個頁面上浮動的視窗很難調整。預覽圖片的部分沒辦法置中。


## Future work
- 使用資料庫來維護使用者資訊！
- 增加整體穩定性、處理不正常操作。

## 心得
因為一開始不確定可以完成到哪，而且邊做邊學，所以程式架構有點冗。很多地方後來熟悉後會覺得可以再大幅精簡，但因為已經寫了很多東西進去，有點難在短時間內修改架構，但這也成為了寶貴的經驗。
因為未來想成為前端工程師，所以花了很多心思在研究叫直覺、美觀的設計，也相對於其他人花很多時間在寫CSS。雖然感覺CSS似乎不是老師評分重點，但我寫得超開心的！