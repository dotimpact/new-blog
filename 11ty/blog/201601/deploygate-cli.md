---
title: deploygateのコマンドラインツールを使ってみた
date: 2016-01-29
pid: 644d53d2a54ebac8ab23b7e0444ce252
status: p
tags:
   - iosdev
   - blog
---

[DeployGate コマンドラインツール][1]

去年コンテンツ違いで9つ作ったiOSアプリのバージョンアップの準備をしている。ファーストリリースのときは１本づつそれなりの時間をかけて出していたのでまあよかったけど、まとめて作業するとなると9本は流石にごつい数で、しかも実際にはそれぞれプロビジョニングとかAPIを切り替えた2バージョン（つまり全18バージョンとか）を扱わねばならないため、それぞれビルドしたりアドホック版の配布作業をするのがかなり大変。ということで、アドホック版のテスターへの配布に使っているdeploygateが提供しているデプロイツールを試してみた。

deploygateのデプロイ用cliツールは、ipaファイルをコマンドラインからアップロードしてくれるだけでなく、ちゃんとコマンドラインからの自動ビルド〜アーカイブ〜ipa書き出し（これもXCodeでやるとけっこう手間取る）や、あのレジェンド級にめんどくさいApple Dev CenterへのUDID登録からプロビジョニングダウンロード後のipa再作成も1コマンドでお願いできるというもの。ちょっとホントかいなと思っていたけど導入してみたらちゃんとやってくれた。iOSアプリのXCode外ビルドってなんとなくそんなにすんなり行かなそうな気がしていたけど、（最近は？）意外とすんなりいくものらしい。上記の通り異常にビルドターゲットがたくさんあるプロジェクトなんだけど、deployコマンドをたたくとビルドターゲットが列挙されて使うターゲットを選べるし問題なかった。とりあえずこれで配信作業はかなり楽になる。

ただこのcliツールはかなり使い方に制限を設けているのか、Build ConfigurationがRelease固定だったりとか（deployするんだからReleaseだろということか。とりあえずgemのソースを書き換えてAdhocコンフィグでビルドするようにした）、あとコマンドからのUDID登録もたしかにできるんだけど、コマンドから更新されたプロビジョニングには登録されたデバイスが全部追加されるっぽいのでけっこう困る。簡単コマンドは単純なユースケースを対象にして複雑なのは自前でビルドタスクをつくれということかな。

[1]:	https://deploygate.com/docs?locale=ja