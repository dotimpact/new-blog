---
title: AVAをWallaby.jsで使う
date: 2017-01-24
status: p
tags:
   - webdev
   - javascript
   - blog
---

ひさしぶりに完全な新規プロジェクトでプロトを作ることになったので、「[Modern JavaScript概観、そしてElectronへ](http://blog.satotaichi.info/modern-javascript_201701/)」を参考に、JavaScriptの最新環境を入れて使ってみている。このエントリ、「ここまで長い解説を読み通しても終わっているのは開発の事前準備だけなんだよね…」というつぶやきも読んだけど、モダンJSの環境（トランスパイラと型システム拡張、静的解析環境、テスト、UIフレームワーク、ビルドなど）について選択肢とシンプルさを重視するようなご本人の選択と、なぜそのツールが必要なのかの解説が明快でとてもうれしい。フレームワークはまだ検討段階だけど開発環境については基本的にこの解説の通りにしてる（ボイラープレートは使ってない）。

使ってみていまのところいちばんこれいいなと思っているのは[AVA](https://github.com/avajs/ava)。先エントリに書いてあるとおりシンプルで高速でPowerAssert、That's itというテスティングフレームワークで、しかもこれはすでにWallaby.jsに対応している。Wallaby.jsごしでもPowerAssertのアサート情報はとてもわかりやすく表示されるので、こけたテストを直すときの手数が明らかに減ってとても快適。

![ava on wallaby.js](https://cloud.githubusercontent.com/assets/979966/10989814/c57074ca-8497-11e5-89cd-73bd78c6d371.gif)

http://dm.gl/2016/04/26/wallaby-sublime-electron-ava/ より

現状バグがあるのかAVAのコールバックモード（test.cb）だと挙動が怪しいけど、これはPromiseを使えば解決するのでPromiseを使うための強制ギブスになるのも結果オーライだった。
