## 題目

---

有天，你的麻吉 h0w 哥跑來找你說：「欸！能不能教我 command line 到底是什麼，然後怎麼用啊？我想用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。就交給你了，教學寫好記得傳給我，ㄅㄅ」

可...可惡，居然這樣子就跑走了。但因為他是你的麻吉，所以你也沒辦法拒絕。

因此這個作業要請你寫一篇簡短的文章，試圖教會 h0w 哥什麼是 command line 以及如何使用，並且要教他如何達成他想要的功能。

---

## 教你朋友 CLI

---

Command line (CLI) 是一種與作業系統溝通的方式，相對於我們平常所使用的圖像化操作介面 (GUI) 例如檔案總管、瀏覽器其實都是我們與電腦溝通的工具。

如果你今天想要透過 CLI 達成建立一個資料夾並且在資料夾裡面生成你想要的檔案的話我們必須先要有可以下指令的對象。

我自己是使用 Windows 的作業系統，但是有許多常見的 Linux 指令在 Windows 下是不相通的，而網站在架 Server 的時候有很多狀況都是在 Linux 的環境下運行，除非你跟我一樣是個 `ASP.NET` 的工程師，你就會接觸到萬惡的 `IIS` 和 `Windows Server`(眼神死)，否則你要對 Server 的操作通常會是透過 CLI，這時候就推薦你安裝一個小工具 `Cmder`！

話題扯遠了，我們還是來講講該怎麼達成 h0w 哥的需求吧！

總之我們先打開 `cmder`

並且把 h0w 的需求分成三個步驟。

1. 建立一個資料夾並取名為 `wifi`

```
mkdir wifi
```

2. 進入 `wifi` 資料夾中

```
cd wifi
```

3. 建立名為 `afu.js` 的檔案

```
touch afu.js
```

這樣就完成嚕！
