title: BCCKSで目次自動ノンブル機能をリリースした
date: 2015-04-28
pid: ba6f91b7606951380daee4b7755167f9
status: p
tags:
- bccks
- selfpublishing
- blog
---

[「紙本目次：自動ページ番号振り機能」をリリースしました！ :: BCCKS情報局][1]

いわゆる普通の紙本なら当然のように目次の項目には該当のページを探せるように対応するページ番号（ノンブル）が記載されている。これをBCCKSの紙本でやろうとすると、本の内容が確定したあとに印刷データを作って、そこで決まった各目次項目のページ数を目次に書き込む、というような手順を踏まないと実現できなかった。さすがにそれはあんまりなのでなんとかしたいと思っていて、他方そんなに大きな仕組み（本の発行に最初のフローで確定したページ番号などの数値が最終フローで埋め込まれるみたいなTeXみたいな仕組み？）を組み込む余裕もないということで、電子書籍のリンク目次を作成するための目次のページでリンクがはられた行について、印刷データ作成時にそのリンク先のページ番号を付加するという特別処理で目次ノンブルを実現できるようにした。ちょっと前からできていたんだけど最終的な詰めがなかなかできなくてようやくリリースできた。

一般機能としてリリースしたので紙本のための本で目次がつくってあるデータであれば、自動ページ番号機能をチェックして印刷データをまわせばノンブルが付加されるはず。BCCKSのエディタには目次記事に[見出しからリンクを生成する機能][2]もあるのであわせてご利用ください。

[1]:	http://support.bccks.jp/announce/news-release/paper_folio/
[2]:	http://support.bccks.jp/faq/navigationlink/
