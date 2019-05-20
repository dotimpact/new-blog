title: iOSのブラウザでは外部キーボードのカーソルのキー入力イベントが出ない
date: "2018-01-06 00:00"
status: p
tags:
- webdev
- ios
- javascript
- scrapbox
- blog
---

菅さんが[iOSデバイスでscrapboxがうまく使えない](https://twitter.com/ssuge/status/949198854196310016)というツイートをしていて、自分はそんなに困ってないけどなとやりとりしていたら、菅さんはiPadに外部キーボードをつなげてscrapboxを使おうとしていて、カーソルキーを使った編集作業ができないので実質使えないのだそう。手元でiPhoneにbluetoothキーボードをつないで試してみたらたしかにそうだった。

ネイティブアプリではカーソルキーが使えるのでどういうことなのかなと調べてみたら、どうやらiOSのブラウザでは（JavaScriptCoreでは？）外部キーボードのカーソルキー操作時のキーイベントが出ず、カーソルキーを使った操作の実装が不可能みたい。

- [jquery \- How to detect arrow keys using JavaScript on iPad with Bluetooth keyboard \- Stack Overflow](https://stackoverflow.com/questions/30221024/how-to-detect-arrow-keys-using-javascript-on-ipad-with-bluetooth-keyboard)
- [javascript \- How to detect key down event for arrow key on textarea? \- Stack Overflow](https://stackoverflow.com/questions/14959048/how-to-detect-key-down-event-for-arrow-key-on-textarea)

{% blockquote %}
Official answer from Apple:

Thank you for contacting Apple Developer Technical Support (DTS). Our engineers have reviewed your request and have concluded that there is no supported way to achieve the desired functionality given the currently shipping system configurations.
{% endblockquote %}

ぜんぜん知らなかった。カーソルキーはページスクロールにも関わるからタッチとの齟齬を考慮して殺してあるのかな。ちなみにAndroidは問題ないようだった。
