---
title: ハイブリッドチャットUI
date: 2016-06-02
pid: 782770930a723446efd80c5d12f7e3ae
status: p
tags:
   - webdev
   - interface
   - blog
---

「[LOHACOのAI「マナミさん」すごすぎ。6.5人分の人件費を削減した実例公開 - BITA デジマラボ][1]」という記事を見てどんなもんだろうと思ってLOHACOのマナミさんを見てみた。要するにFAQやマニュアルの検索に対話型インターフェイスをかぶせたようなものなんだけど、アバターからレスポンスが即座に、適度な量返ってきて、やりとりの中で欲しい情報への絞込が自然に行えるようなものになっていれば、大げさな技術がなくてもたしかに効果ありそうだなーと感心した。

{% image "/images/201606/manai-san.png " %}

もうひとつ感心したのはチャット風の吹き出しメッセージとボタンなどのGUIが混在した独特のUIになっているところで、チャットベースだからって全部テキストで指示するんじゃなくて状況に応じたGUIが提示できるようになってればいいわけで、これもこういうのでいいんだなーと思った。

チャットボットAPIもこういうふうになっていくのかなーと思って試しにイメージをつくってみたんだけど、

{% image "/images/201606/chat-ui.png " %}
「[スマホサイトでLINE風の幅可変ページを作成する | Creator Clip][2]」を改変

調べてみたらふつうにFacebook Messenger PlatformにはボタンとかカードのUIを表示する仕組み（Structured Template）があった。そりゃそうか。

{% image "/images/201606/fbmp.png " %}

[Send API Reference - Messenger Platform][3]

[1]:	https://bita.jp/dml/lohaco_manami
[2]:	http://creatorclip.info/2014/03/smartphone-line-liquid-layout/
[3]:	https://developers.facebook.com/docs/messenger-platform/send-api-reference#request