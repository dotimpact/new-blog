---
title: MacroDroidで体調日記をつける
date: 2015-02-14
pid: ccdadbe3c0da8b252589d1a0b1dac28c
status: p
tags:
   - android
   - pebble
   - macrodroid
   - productivity
---

裴英洙 「<a href="http://www.amazon.co.jp/exec/obidos/ASIN/4478025959/dotimpact-22/ref=nosim/" name="amazletlink" target="_blank">なぜ、一流の人は「疲れ」を翌日に持ち越さないのか</a>」という本で体調をセルフチェックするために自分の体調を定期的に継続して記録する方法が紹介されていて、ふーんと思ってとりあえず朝と昼は食事内容と一緒に体調を◯☓でつけるようにしている。いまのところ記録がどうということでもないけど。

こういうのPebbleで５種のアイコンから選ぶような感じの体調記録アプリにするといいんじゃないかなーと思ってたんだけど、Pebbleでの実現方法がなかなか面倒そうなうえ、MacroDroidというAndroidアプリを試用してたらわりとやりたいことが実現できてしまった。

[MacroDroid - Device Automation - Google Play の Android アプリ](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid&hl=ja)

MacroDroidはいわゆるタスクオートメーションアプリでAndroidデバイスの操作やらセンサー情報をトリガーにして設定したアクションを実行できるやつ。専用のトリガー用pebbleアプリがあるのと、アクションにgoogle カレンダーにイベントが登録できるのがあったのでpebbleのボタンを押すと体調をあらわすアイコンをカレンダーに登録するタスクを作って１時間ごとに記録するようにしてみた。アイコンがならぶとなかなか楽しい（１時間ごとに記録をうながす通知もMacroDroidでpebbleに通知するようにした）。

{% img "/images/201502/health-log.jpg 300 " %}


MacroDroidは通知バーにもボタンを置いてタスクを登録できるので、pebbleは他アプリが起動中で使えないときはAndroidの通知バーからも記録できるようにした。

{% img "/images/201502/macrodroid-notification.jpb.jpg 300 " %}

こうなるともうちょっと体調の詳細を書けるようにしたくもあるけど、１クリックで済むほうが続きそうなのでしばらくこれで続けてみる。
