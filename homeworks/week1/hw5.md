## 請解釋後端與前端的差異。

前端：

前端為最後顯示在畫面上的部分，以前端工程師的職務劃分來理解前端的話我覺得會比較直覺，這部分可以參考導師 Huli 的文章。

[Huli 零基礎的小明如何成為前端工程師](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)

現代的前端工程，除了單純把內容丟到畫面上之外，對於資料的處理，檔案壓縮，搜尋引擎優化等非直接「可見」的努力，也是其重要的一環。

後端：

後端主要的作用是回應使用者的請求，並將結果反應回給使用者，這個結果可能是個圖片、字串、計算結果，這過程就牽扯到了一個遠端的機器需要處理這件事。

這個機器上面放著一隻程式專門處理使用者的需求，而這就是後端程式，後端程式會根據使用者請求進行計算，或者向資料庫進行查詢，資料庫本身也是一隻程式，用來儲存、查詢資料。

簡單來說，根據使用者的需求，進行回應就是後端的工作。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

在我們按下 Enter 鍵之後，我們的瀏覽器會發請求到 google.com 這個 Domain ，而經過 Domain Name Server 轉譯成 IP 後，請求會被傳送到 Google 的 Server ， Server 收到通知之後，會將結果計算，例如搜尋資料庫，並根據自己的商業邏輯進行計算，如選擇要塞的廣告、搜尋結果的優先度，並再將結果傳送回給使用者，使用者的瀏覽器再根據收到的資料重新把畫面渲染出來。

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. 顯示出檔案的資訊

```
file <檔案名稱>
```

2. vim 以外的 command line 文字編輯器

```
nano <檔案名稱>
```

3. 顯示檔案最後幾行字，用來看 Log 很方便

```
tail <檔案名稱>
```
