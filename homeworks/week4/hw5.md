## 請以自己的話解釋 API 是什麼

API 為開發者替其他開發者介接服務的接口，其提供者可來自四面八方。

如透過 Http 做溝通的為 Web API，除此之外還有其他 API 的提供者，如作業系統。

我覺得 API 能夠讓使用者以較低限度的基礎知識去達成開發或使用上的需求，以課程需求的 twitch API 為例，我們只要塞好 header 和根據官網上的文件就能取出我們想要的資料，而在自己的程式端做我們想要的操作。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

431 Request Header Fields Too Large

字面上的意思，可以表示 header 總長度太長，也有可能是 header 單一欄位長度太長。


451 Unavailable For Legal Reasons

因為法律原因而無法提供內容。

看到這個 Status Code 我在想的是這個 Status Code 是誰回傳的，從英文版 wiki 那邊來看好像有可能會是 ISP、DBS 提供者等等，所以不一定會是由原伺服器回傳。


426 Upgrade Required 

要求 Client 升級傳輸協議，下面是從 MDN 看到的範例。

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```


418 : I'm a teapot

我知道這不是 Http 的標準，但是在 MDN 看到這標題就感到好奇，所以就 Google 了一下，結果就被 [huli的文章]([huli的文章](ttps://blog.techbridge.cc/2019/06/15/iam-a-teapot-418/)) 科普了...

這是個愚人節笑話，用來表示伺服器是個茶壺，因此拒絕煮咖啡。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。



| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳資料 | GET    | /restaurants     |    _limit:限制回傳資料數量       | /restaurants?_limit=5|
| 還傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/1      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名稱 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳   | PATCH   | /restaurants/:id     | name: 書名 | 無              |