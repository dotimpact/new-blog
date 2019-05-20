---
title: ルールの可視化
date: 2015-08-19
pid: 5a2baa68bd42cf399ccc98471b4528b2
status: p
tags:
   - videogame
   - blog
---

ゼロベースの社内slackでの会話：

> kotaro: 結婚式マネージング、ゲームになるんじゃないかな
> nagatomo: 斎藤由多加に作らせたい
> nagatomo: Tower作った後にお話した時に、真剣にラジオ番組編成ゲームを練ってた。ひたすら最適なラジオ編成をしてオーディエンスゲーム獲得するっていう。その時は誰得だよと思った
> nagatomo: へえ、ダイヤ編成とかもありそうですね、って言ったら「全然違う、ダイヤ編成では全然ダメだ」って言われた。そんときはよくわかんなかったけど、今はダメだなあって思う
> kotaro: なんでラジオなんだろ
> nagatomo: なんかね、自由度とニッチさ（マニアックさ）の狭間がよかったみたい。テレビとかだともっと縛られているイメージがあって自由に編成できるリアリティがないとか。今でいうプロデューサー視点に立ちやすいんじゃ内かな。加えて、コンビニ経営ゲーム的なオーディエンス獲得っていうわかりやすいKPIが設定できるっていう。
> kotaro: なるほど
> nagatomo: でもエレベーターの行き来を最適化するTowerがよくて、ダイヤ編成がダメな理由は今でもよくわかりませんがｗ
> kotaro: ダイヤはルールと結果(列車の運行)が乖離しているのでゲーム向きじゃないとは言えそうですね
> kotaro: エレベーターはルールが可視化できる
> kotaro: ダイヤ編成による運行シミュレーションではなく、ダイヤ編成とか時刻表そのものをアウトプットとするパズルゲームならできると思う

斎藤さんがダイヤ編成ゲームがダメだといった理由の実際のところはわからないんだけど、コンピュータゲームにおいて「可視化されたルールそのものを操作できる」という形式が重要なんじゃないかというのは自分で言ってみて納得した。列車運行をゲームにするのであればダイヤを編成させるよりは路線そのものを引かせるほうがデザインとして正しいし、逆にダイヤ編成が持つ独特のルールをゲーム化するならば、現実の列車運行と離れてダイヤグラムそのものがフィールドになるゲームというのがデザインとして正しくなるんだと思う。

このゲームの可視化されたルールと現実のシミュレーション性のバランスがゲームの形を決めるというような議論はちょっと前のピコキャス（[第47回 無編集4時間雑談スペシャル。組織図シムの着地点探しから、ゲームのviewとmodel層、北欧の奇祭を妄想する話まで - @IDA\_10 x @miyaokaのピコピコキャスト][1]）でもされていた。みやおかさんが開発中の会社の組織図をバランスするゲームの着地点として、「会社の組織図」がモチーフになるなら会社のシミュレーションではなく組織図そのものを完成させるのがゴールになるべきだという話をIDA\_10さんが[MiniMetro][2]などを例に出しつつしていて、これが上記の発言のソースになっている。

[1]:	http://d.hatena.ne.jp/iandme/20150427/1430099897
[2]:	/2015/01/02/201501/mini-metro/