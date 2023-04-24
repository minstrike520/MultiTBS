<i>Branch: feature_customizeContainer</i>

# All the Todo here

## Continue on messing around with Container.js

應該要先獨立拉出來在compiler測試一下吧？

## Found something cool in method of testing to try

我把Lab 的 scene 掛到 document 上面，然後就能夠及時讀取跟操作整個舞台了。是個很好的除錯手段。

## User Interface 

可以先做簡單的UI，包括玩家狀態、切選單之類的，不過現階段縮放焦點在左上角不在中心，問題可大了。所以我得開發container來解決縮放問題。如果有一個跟鏡頭一樣縮放點在中間的物件的話，那那個物件就可以順利的一起縮放，到時候甚至可以透過更改縮放點來根據滑鼠在的位置來縮放。

想起來了。UI也可以用dom來做。那樣的話應該就沒有畫布移動的問題。但是有些偏繪圖的大概還是得用phaser。欸不對，是不是可以用canvas畫？

## 留空間給後端傳資料進來

## spck 好棒！！