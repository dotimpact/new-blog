---
title: Chromeリモートスクトップのリモートサポート機能
date: 2015-12-02
pid: cea7d17f87f42ec4844cff59b996aec0
status: p
tags:
   - blog
---

[Chrome リモート デスクトップの概要と使用方法 - Chrome ヘルプ][1]

こないだ[実家のPCを設定したとき][2]に使えるかなと思ってChromeリモートデスクトップをインストールしてスタートメニューにショートカットを作っておいたんだけど、それが役に立つときがやってきた。

Dellのマシンにプリイントールだったマカフィーのアンチウィルスソフトを、まあいいかと思ってそのままにしておいたんだけど思ったよりサービス期間が短くてもう更新しろと言われると親が電話してきたので、じゃあこっちから操作するからPCを起動してスタートメニューのなんとかリモートデスクトップってのを探して（Chromeとか親が知ってるわけないし読めないからせめてGoogleにするか別の名前にしてほしい）起動してと伝えて、共有ボタンを押して表示される番号（アクセスコード）を教えてもらってこちらのクライアントに入力すると、問題なく画面共有ができた。これはいいね。

いくつか注意点があって、リモートサポートでの画面共有は制限時間があるらしく、しばらくすると被操作側のデスクトップに「このPCは◯◯と共有されています。継続しますか？」というダイアログがでてきて、しばらくすると接続が切れてしまう。しかも継続を操作側から押せないっぽい（？操作に失敗してただけかもしれないけど、押せなかった）ので定期的に継続ボタンを押してもらう（ないし、再度共有してもらう）必要があった。あと、システムを変更するような操作については制限があるらしく、アンチウィルスソフトのアンインストールボタンとかは押せなかったのでそこだけは電話で親に指示して操作してもらった。まあでも、電話で想像で操作を指示するようなのよりいらいらせずにサポートできるので実家の親にそうしたサポートを要求されがちな人にはおすすめ。

ついでにこないだまでできていたデジカメの写真のインポート（前回設定時にWindowsの標準アルバムアプリを使うようにインポートの仕方を教えておいた）がうまくいかなくなったという件もサポートしたんだけど、それはある条件下（インポートしたいSDカードにインポート済みの写真が入っていて新規インポート写真の選択が必要な際）のインポートダイアログはアプリウインドウが最大化されていない状態だと下が隠れてしまい（そもそもダイアログが見切れるのはどうかと思うのだが）、しかもMetroUIのダイアログは見た目上それが下端かどうかが見極めずらいため、隠れた位置のインポート実行ボタンが押いないということに気づかないという問題だった。これは僕でもどういう状態なのか気づくのに時間かかったしひどい。Windows10はだいぶよくなってるなと見なおしてたんだけど評価が下がった。

[1]:	https://support.google.com/chrome/answer/1649523?hl=ja
[2]:	http://text-perforation.doppac.cc/2015/10/10/201510/parents-home-pc-setting/