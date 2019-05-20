title: ケーシー・リース／ベン・フライ『Processingをはじめよう 第2版』を読んだ
date: 2016-10-18
pid: 227c34c89b886d3e9cd78c63d58862ba
status: p
tags:
- book
- processing
- blog
---

{% img http://www.oreilly.co.jp/books/images/picture_large978-4-87311-773-7.jpeg 300 %}
[O'Reilly Japan - Processingをはじめよう 第2版][1]

---- 

訳者の[船田さん][2]にご恵投いただいていた『Processingをはじめよう』の第２版を読んだ。第１版から５年ごしの改版となった第２版は記述やサンプルが最新版のProcessing 3.Xに正式対応していて、データビジュアライズのレッスンになっている（Getting started with Visualizing Data的な。ここはベンフライが書いてるんだろう的な）追加章も収録されてる。

読んでちょっとびっくりしたのは、第１版で特徴的だった手書きイラスト調の図版が全て普通のイラレで描いた図版に差し替わっていたこと。あれ好きだったのに評判いまいちだったのかな。それとも版が変わったから全体的になんかしら変えたいみたいな意向なのだろうか。ジャケットを外した中表紙とか帯の表4などに使われなくなったイラストが使われているあたりに名残惜しさが感じられる。

Processingいつのまにか便利げな命令が増えているので（[createShape][3]とか[pushStyle][4]/[popStyle][5]とか）そのへんどうなのかなと思ったけど入門には不要ということか触れてなかった。ただ追加章の「Data（データビジュアライズの章）」では[loadTable][6]や[loadJSONObject][7]が実践的に触れられていてなるほどと思った。

授業で学生がやりたいことを実現する方法を伝えるときに、[IntList][8]/[IntDict][9]あたりはむしろ配列より初心者フレンドリーな面もあるなと思っていて、配列といっしょに解説されてたりリファレンスに収録されてたりするといいなと思った。あと現場で意外と使う命令としては[blendMode]()があって、メディアアートっぽい画面を描きたい！　っていう学生が画面を加算合成にするために使う。

あと、先に出てた『[Arduinoを始めよう 第3版][11]』の販促品としてArduinoクイックリファレンス下敷きをオライリージャパンが作っていてるんだけど、やっぱこれのProcessing版ほしいなあ。オライリーさん作ってくれないのかしら。

<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">ジュンク堂池袋店でもまだ「Arduino下敷き」を配布してますね。「ものを作って生きるには」や「ギークマム」など10くらいの書籍に挟んだ状態で特集コーナーに置かれてます <a href="https://t.co/r5kCTFSXVs">pic.twitter.com/r5kCTFSXVs</a></p>&mdash; Funada (@sentoki) <a href="https://twitter.com/sentoki/status/765399324431831040">August 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

[前も書いた][12]けどいまプログラムの授業してて思うのは、プログラムについて授業で解説したりテキスト配ったりしても結局学生はググって見つけた情報のほうを見てしまうというのがあるんだけど（もちろん講師側がより信用されるべき解説やテキストを出せていない面もあって、そこは改善しないといけない）、でももしかしたら下敷きならGoogleに勝てるんじゃないかなという淡い期待がある。

まずは自分で作れってことかな。Arduino下敷きももともとは[船田さんたちが作ってた][13]わけだし。

[1]:	http://www.oreilly.co.jp/books/9784873117737/
[2]:	https://twitter.com/sentoki
[3]:	https://processing.org/reference/createShape_.html
[4]:	https://processing.org/reference/pushStyle_.html
[5]:	https://processing.org/reference/popStyle_.html
[6]:	https://processing.org/reference/loadTable_.html
[7]:	https://processing.org/reference/loadJSONObject_.html
[8]:	https://processing.org/reference/IntList.html
[9]:	https://processing.org/reference/IntDict.html
[11]:	http://www.oreilly.co.jp/books/9784873117331/
[12]:	http://text-perforation.doppac.cc/2016/05/10/201605/still-image-of-clock/
[13]:	http://k-tai.watch.impress.co.jp/docs/column/stapablog/372652.html