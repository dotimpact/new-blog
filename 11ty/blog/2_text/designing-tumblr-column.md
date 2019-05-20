---
title: アプリ開発者とTumblr（「Desiging Tumblr」掲載コラム）
date: 2012-09-11
pid: d71d2b79b986cee9b734aa50da029149
status: p
tags:
   - tumblr
   - column
---

**初出：「Designing Tumblr」（BNN新社）**

---- 

<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4861008301/dotimpact-22/ref=nosim/" name="amazletlink" target="_blank"><img src="http://ecx.images-amazon.com/images/I/41l1o7VGlPL._SL160_.jpg" alt="Designing Tumblr デザイニング・タンブラー" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4861008301/dotimpact-22/ref=nosim/" name="amazletlink" target="_blank">Designing Tumblr デザイニング・タンブラー</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 15.07.06</div></div><div class="amazlet-detail"><br />ビー・エヌ・エヌ新社 <br />売り上げランキング: 53,289<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/4861008301/dotimpact-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>

---- 

## Tumblrは開発者にも人気！

Tumblrはそのデザイン性やクリエイティビティに魅かれたユーザーだけでなく、ハッカー気質の強い開発者の間でも人気が高いサービスです。個性の強いTumblrというサービスに集まった開発者がつくるツールやサービスは最先端の技術やコンセプトを取り入れた実験性の高いものが多いのも特徴的で、本書で紹介されているアプリ、Webサービス、ブラウザ機能拡張以外にも、サービス開始当初から（すでに役割を終えたものも含め）無数の実験的ツールやサービスが公開されています。本稿ではそんなTumblrとツール、サービス開発者の関係について解説します。

## ブラウザ機能拡張でユーザーが進化させたDashboard

Tumblrが開発者を魅了したポイントとして、Tumblrというサービスにある種『魅力的な使いづらさ』があったのだと筆者を考えます。サービス開始よりAPIが整備され、ユーザーが好みのアプリやサービスを通して見ることが普通だったTwitterなどと違い、Tumblrではある時点までタイムラインAPIの提供が行われずユーザー体験がDashboardに集約される形で（おそらく意図的に）制約されていました。ブラウザ機能拡張によるDashboardの「改造」やツールを使うユーザー間の独自の文化（Autopagerizeでタイムラインをさかのぼることを「掘る」「潜る」などと表現するような）が発展したのはこうした背景があります。現在はAPIが整備され、閲覧方法はアプリやサービスなどさまざまなスタイルになりましたが、Dashboardという標準画面を拡張していかに使うかという部分に多くの開発者が取り組み、Tumblrの使われ方自体を発展させるような文化はまだ残っているように感じます。こうしたユーザーによる機能拡張の流れにTumblr本体が影響され、標準に組み込まれた機能が多いのもTumblrらしいところでしょう。[LDRize][1]に代表されるキーボードショートカット、「エンドレス スクロール」として取り込まれたAutopagerizeの機能や、現在はテーマとしてもよく見られる写真ポストのグリッド表示も、「TUMBLR MOZAIC VIEWER」を見たTumblrスタッフがインスパイアされ本家のArchve機能としていち早く取り入れたことを[スタッフブログで表明][2]しています。

## Tumblrのサービスデザインが、アプリの増殖をうながす

Tumblrのもうひとつ重要な特徴として、通常のブログサービスと異なり写真、映像、引用など投稿のメディアタイプが明確に区別されている点があります。このシンプルなルールはブログユーザーにとっても投稿を気軽にできるメリットがありますが、投稿支援アプリやTumblrのコンテンツを利用するアプリを開発したりするうえでもメリットになっています。「Tombloo」のような投稿系の機能拡張が選択メディアや動画サイトから1クリックで狙い通りの投稿ができるのも、投稿メディアタイプを持つTumblrの設計によるものですし、投稿されたコンテンツが常に正しいメディアの種類を知っていることで、「Tumblrに投稿された写真のみを表示する」ようなサービスが格段に開発しやすい環境になっているわけです。このように、ルールひとつで投稿の促進やコンテンツの再利用を促すTumblerのエレガントさにより、多くのツールやアプリ、サービスが生まれている面もあります。

[1]:	http://white.s151.xrea.com/wiki/index.php?script%2FLDRize
[2]:	http://staff.tumblr.com/post/561122371/new-archives