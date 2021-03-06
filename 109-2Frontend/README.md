# 網頁連結：https://zi-rain.github.io/109-2Frontend/final/html/homepage.html </br>
# 影片教學：https://youtu.be/c_WpNcxvLtU</br>
程式介紹：00:00-04:45</br>
實際操作：04:45-09:41</br>
## 強烈建議使用Chrome開啟，若使用Safari有極大可能會排版跑掉。</br>
## 動機：小時候很喜歡玩記憶遊戲，覺得自己做一個的話應該會很好玩，因此決定將它作為期末報告主題。</br>
而我希望這個遊戲的互動性可以更強，因此在homepage選取難易度之後，在進入遊戲之前，會有一個匯入圖片的頁面，讓玩家可以自行更換喜歡的圖片（有預覽的功能哦！）。如果手邊一時沒有這麼多圖片，也可以只更換其中幾個、或完全不輸入任何圖片（直接點選「確定」」，使用遊戲中的預設值。此外，由於每個輸入框對應到的是不同的圖片，因此更換第一張圖片與更換第二張圖片時，取代的圖片會是不同的。</br></br>

## 使用函式庫：jQuery </br></br>

## 功能：難易度分為簡單（6組）、普通（10組）、困難（12組）、地獄（15組）。</br>
其中不同難易度也對應到不同主題的圖片（也就是說，這43組圖片完全不重複）。在「地獄」的難度中，不只是圖片組數最多的，圖片的相似度也更高哦！</br>
簡單->青蛙插圖</br>
普通->甜點</br>
困難->迷因</br>
地獄->長得很像的風景照</br></br>

## 使用的方法：</br>
### homepage->關卡：</br>
利用<a>的href來切換到不同的頁面（每個困難度都是不同的.html）</br></br>

### 引入圖片：</br>
先對html中的input加上id，並設定輸入格式，再由input.js偵測是否有圖片輸入，若有的話，則更改對應id(牌面)的src，預覽圖片也是相同的概念。</br></br>

### 玩遊戲：</br>
會先由shuffle函式進行洗牌，每次翻牌時檢查兩張牌的data-framework是否相同，若相同則不翻回去，且讓兩張牌都不能再被翻。</br>
在程式的最開頭，先定義n為總牌數、count為目前湊成對的牌數，每次檢查兩張牌相同時，count+=2。</br>
此外，計時器會在翻第一張牌後，開始記錄玩家所用的時間，times則會記錄玩家翻過幾次牌（兩張為一次）。</br>

雖然每個困難度都有各自的.css跟.js（只有input.js是共用的），但內容都大同小異，主要是調整輸入框與牌面大小，以及設定n值的不同。</br></br>

### 遊戲結束：</br>
當count與n相等時，會跳出結束畫面，顯示使用的時間與翻牌的次數，並由玩家選擇要重新或回到首頁。

### 使用函式庫：</br>
google fonts</br></br>

### 參考資料：</br>
記憶遊戲原理與主程式：https://github.com/code-sketch/memory-game </br>
透過js修改css樣式：https://ithelp.ithome.com.tw/articles/10226003 </br>
透過js跳轉頁面：https://ithelp.ithome.com.tw/articles/10190062 </br>
參考學長姐網頁（js使用方法、css設定）：https://yichiehliu.github.io/final/game.html </br>
https://hsuehchieh.github.io/109-1Frontend/Final/TaiwanMonopoly.html </br>
onclick使用方法：https://www.w3schools.com/jsref/event_onclick.asp </br>
上傳圖片+預覽：https://progressbar.tw/posts/47 </br>
https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded </br>
