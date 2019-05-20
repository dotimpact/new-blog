---
title: pipesの思い出
date: 2015-06-08
pid: 97fc84f87d6bd3a78919b5200d35fdea
status: p
tags:
   - webservice
   - blog
---

Yahoo! pipesが終わることが決まったそうなので、わりといろいろ使っていた自分のpipesをまとめておこうかなと。

- [[BCCKS] latest bccks][1][1]
	- 最初に触ったのはこれかな。当時(2008?)は全然関係者じゃなかったBCCKSのβテストでガビンさんにアカウントをもらったとき、新着RSSがなかったのでスプレイプして出すようにして、その手順を[ピクチャーブックとしてまとめてみた][2]やつ。
- [Pipes: tokyo culture culture upcoming schedule][3]
- [Pipes: bisista\_mailmag\_fetch][4]
- [Pipes: danchidanchi\_rss][5]
- [Pipes: Dr.森山の人間風車][6]
- [Pipes: 座二郎のデコミ！][7]
- [Pipes: the\_beach\_diary\_rss][8]
- [Pipes: ラジオ 沼(12kai.com)][9]
	- こういう昔ながらのホームページで更新チェックしたいところのを野良RSS化するのはいろいろ作っていた。ちなみに「ラジオ 沼」のはPodcastでまだかえるさんがときどき更新しているのでいまでも使える。
- [Pipes: permanent\_moriyama\_com\_rss][10]
	- これはちょっと頑張ってつくったやつ。サイエンスライターの森山和道さんの日記の更新チェックをはてなアンテナとかでしてたんだけど、森山さんの日記は年ごとにディレクトリが変わる運用なったので、現在の日付から年号を取り出して合成してURLをつくって、そのURLでフェッチしてRSSをつくる。年が変わらないとテストができなくて困った。
- [complete\_daily\_portal\_z\_updates][11]
	- いちばんの力作で、デイリーポータルZの記事はもちろん、クラブ活動、コネタ、プープーテレビ、ちょっと見てきて、制作ブログ、メルマガのバックナンバー、さらにはきょうのZくん（隠しページのイラスト）までをまとめたRSSを吐くもの。サブモジュールもすごいたくさん使っている。

{% image "/images/201506/pipes.png small " %}

		こんなやけくそなpipeになってた

- [Pipes: 東日本大震災 from BigPicture][12]
	- こんなのも作りましたね。OSXのピクチャスクリーンセーバー向けにつくった。
- [Pipes: DMM.make RSS]()
	- 一番最後につくったやつで、当時DMM.makeのサイトにRSSがなかったのでつくった。

こんな感じで手軽にRSSが作れるサービスとしてかなり活用してきた。正規表現のテストとかかなり面倒だったけど。最近はなんか機会があるとkimono labsとか触ってみるけどできることが直線的であんまり楽しくないなーという感じで、そういう意味でいうとpipesは便利というより楽しかったんだと思う。サービス運営してきた人にはおつかれさまといいたい。

[1]:	http://pipes.yahoo.com/pipes/pipe.info?_id=181877b7a8a383d817aae59ce92f89c8
[2]:	http://alpha.bccks.jp/viewer/11046/1/A
[3]:	http://pipes.yahoo.com/pipes/pipe.info?_id=bJSYVnve3BGw44YQ2h2EvQ
[4]:	http://pipes.yahoo.com/pipes/pipe.info?_id=2EHuPHnq3BGgmwxj8ivLAg
[5]:	http://pipes.yahoo.com/pipes/pipe.info?_id=Als2U1Hu3BGh4vGkLO2fWQ
[6]:	http://pipes.yahoo.com/pipes/pipe.info?_id=dG8ba1293RGx3TGVBBNMsA
[7]:	http://pipes.yahoo.com/pipes/pipe.info?_id=XMUzirhB3hGGhn_06icw5g
[8]:	http://pipes.yahoo.com/pipes/pipe.info?_id=Erf5bqXq3BGsRGx22h2EvQ
[9]:	http://pipes.yahoo.com/pipes/pipe.info?_id=As_MnRWm3RGGi3L3BBNMsA
[10]:	http://pipes.yahoo.com/pipes/pipe.info?_id=PsEaoyDk3BGFjoYvxAnzeQ
[11]:	http://pipes.yahoo.com/pipes/pipe.info?_id=0DHz2Nvv3BGKZAh_xQnzeQ
[12]:	http://pipes.yahoo.com/pipes/pipe.info?_id=836332af2a1ac5a62ed4146e0748a4b5
