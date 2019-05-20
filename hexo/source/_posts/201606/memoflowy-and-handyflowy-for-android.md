title: Android版のMemoFlowyとHandyFlowy
date: 2016-06-14
pid: 7f89034b900b757d4f51f2193b9145bf
status: p
tags:
- android
- workflowy
- blog
---

workflowyを機能拡張するアプリでHandyflowyというのがiOSで出てて、使ってみたいなと思ってたらいつのまにかAndroid版が出てた。

[HandyFlowy - Google Play の Android アプリ][1]

かなり複雑なアプリになっててうーんと思う部分もあるけど、ブックマークとか検索で閲覧を便利にできるのはよさそう。ブックマークはまじめ登録していくと機種変とかのときに泣くことになりそうなのでせめてデータの書き出し/復元ができるといいな…

モバイルデバイスでのWorkflowyの編集については限界があるので、やっぱりInbox的な場所にフラットに書いておいて後で再構築するような形になるんだろう。HandyFlowyと同じ作者のMemoFlowyというアプリが以前からあってこれも使ってるんだけど、こちらも待望の自動ペースト機能（※）が導入されたアップデートが出てた。編集はこっちでやってくれということなんだろうな。

> ※ WorkflowyはAPIが公開されてないので、前パージョンのMemoflowyはメモ画面で入力したテキストを保存するにはWebview画面のWorkflowyに移動して手動でペーストする必要があった。最新バージョンではWorkflowyボタンをスワイプすることでこのペースト作業を自動で（たぶんバックグラウンドのWebviewで開いたWorkflowyのjavascriptをたたくことで）できるようになった。HandyFlowyの開発で蓄積されたノウハウでこちらも実装したという感じ。

[MemoFlowy （ WorkFlowy専用メモアプリ ） - Google Play の Android アプリ][2]

MemoFlowyはアプリが落ちたりセッションが終了した際にメモ内容が永続化されてないので消えてしまう、という仕様はまだそのままっぽいので、これも改善されるといいなと思う。

[1]:	https://play.google.com/store/apps/details?id=jp.nap.app.handyflowy%0A
[2]:	https://play.google.com/store/apps/details?id=jp.nap.app.memoflowy