---
title: Vivliostyleで漢字かきとりドリルをつくる
date: 2015-09-11
pid: 709ed66f6a2606af7e1872e9c7b02388
status: p
tags:
   - kosodate
   - selfpublishing
   - blog
---

{% image "/images/201509/kakitori-drill.png " %}

子供が漢字を覚えるのが苦手なようで画数の多い漢字に苦心しているので、テストで間違えた漢字をかきとりする専用ドリルを作ってあげようと思い、せっかくなのでcss組版にしてみた。

さらにせっかくなので、vivliostyleをさわってみようと思って、[vivliostyle（α版）][1]のサンプルをいろいろ変えてみるも、どこをいじるとどうなるのかわからない…いや、プロパティからなにを設定しているのかはある程度想像はつくんだけど、α版のデモサンプルだからかいろいろな設定が入っていてなにがどの状態で効いているのかがよくわからないので削っていったらほとんどvivliostyleと関係ないスタイルになった。あと（これもα版だからだろうけど＆BCCKSのリーダーでも言えることだけど）、通常のブラウザレンダリングをjsで拡張した形なので、レンダリング結果をdev toolで見てもスタイリングとの関係がよくわからなかったり、その場でスタイルを追加したり調整したりもできなかったりで、通常webスタイリングからするとかなり隔靴掻痒な感じがあった。レンダリング結果に各プロパティの寸法が記載されるようなデバッグモードがあるといいなーと思った。

とりあえず形になったものを奥さんに見せたところ、問題（しかも苦手な漢字だけの）だけがずらずら並んでるようなドリルだと威圧されるだろうとのことだったので、イラスト（実際には子供が書いた絵を載せたりしました）を入れたり最後にクーポンをつけたりしてみた。クーポンもほんとはページの角に切り取りやすいようにつけたかったけどcss組版ではトンボを入れて裁ち落としができるようなページは現状つくれないのかな？（なにか方法があるのかもしれないけど）　chromeでページを印刷する方法だとページ端のマージンも避けられなかったりするようなのでとりあえずあまり攻めない方向になった。

とりあえず意味あるかわからないけど現状を公開しておく。漢字ドリルを量産できるDSLでこういうのが生成できるといいような気がするな。
- [https://github.com/dotimpact/css-publishing][2]

[1]:	http://vivliostyle.github.io/vivliostyle.js/index-ja.html
[2]:	https://github.com/dotimpact/css-publishing