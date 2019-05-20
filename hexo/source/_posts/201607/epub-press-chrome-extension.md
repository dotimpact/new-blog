title: EpubPressでEPUBを作ってPlayBooksで読む
date: 2016-07-22 10:33
pid: f7d503bc3a2bd5ce4ae1b2fbaf885066
status: p
tags:
- selfpublising
- book
- blog
---

[EpubPress - Create ebooks from your favorite webpages][1]

[【レビュー】開いているタブをまとめてEPUB化できるGoogle Chrome拡張機能「EpubPress」 - 窓の杜][2]

タブに開いているWebページのコンテンツを抽出してEPUBファイルを作れる「EpubPress」というChrome拡張があるのを知って、ちょっと使ってみた。じつは前々からWebページのファイル書き出しオプションとしてEPUBがほしいと思っていたのだった。

おそらく本文抽出したhtmlと画像をスタンダードなCSSといっしょにzipで固めているだけで大したことはしていないんだと思うけど、いくつか試してみた限りだとちゃんと読める（画像などもちゃんと挿入された）EPUBがダウンロードされて電子書籍アプリで読める（EPUBの代わりにmobiを出力してKindleのメアドに直接送信する機能もあるようだけどそっちは試してない）。

Kinoppyはリーダーに本の開き方向（縦組/横組）変更機能があるので縦書で読めるかなと思ったけどサイドロードしたEPUBだとそのUIが出ないので縦書にはできないっぽい。あとたまたま試したWebページが「[絵文字😹😸🙀は空白をつくり、感情🔥を区切る | ÉKRITS / エクリ][3]」だったので絵文字が出なくて残念みたいな問題も発生していた。他のリーダーだとどうかなと思って普段は使ってないGoogle Play Booksを試してみたら、絵文字も表示されていい感じだった（レンダリングにChromeをそのまま使ってるのかな）。

{% image /images/201607/epubpress.png 250 %}

EPUBにしてリーダーで読めば長文記事も集中して（オフラインでも）読めるよというというのがツールの趣旨だと思うけど、電子書籍リーダーだと読み上げ機能が使えるのもなかなかよいと思った。

[1]:	https://epub.press/
[2]:	http://forest.watch.impress.co.jp/docs/review/1008708.html
[3]:	http://ekrits.jp/2016/07/2076/%20