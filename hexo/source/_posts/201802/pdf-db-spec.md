title: Mysqlのスキーマと初期レコードをpdfのテーブル/マスタ定義書として書き出す
date: "2018-02-01 00:00"
status: p
tags:
- webdev
- tools
- blog
---

[dotimpact/pdf\-db\-spec: mysqlの既存テーブルからpdfのドキュメントを作る](https://github.com/dotimpact/pdf-db-spec)

---

いまやってる仕事（わりと堅い）で詳細仕様書の一部としてDBのテーブル定義書を作ることになり、手でつくるのは面倒なのでDBマイグレーションツールで作成したDBのテーブルと初期データをドキュメント化する方法をいろいろ試して、最終的にMysqlのXML/HTML出力を加工してpdfにするスクリプトを作ったので公開しておいた。Mysql限定で、wkhtmltopdfも必要。

最初[schema2rst](http://tk0miya.hatenablog.com/entry/2013/12/12/012054)を試して、Htmlドキュメントとしてはなかなかよかったんだけど、ドキュメントとして共有するのにpdf化するにはあんまり向いてなかったので、[続・MySQL データベースからテーブル定義書を生成する \- 私と私の猫の他は誰でも隠し事を持っている](http://mariyudu.hatenablog.com/entry/2015/02/01/200517)の出力をwkhtmltopdfでpdfにするアプローチにした（xsltとhtmlのスタイルはほぼそのまま使ってます。ありがとうございます）。wkhtmltopdfでレンダリングされるhtmlドキュメントのサイズがあんまりうまく制御できなかったので、`--zoom`で適当に拡大している。あと長いテーブルの途中で改行されるときにテーブルヘッドがちゃんと表示されるように

{% codeblock lang:css %}
thead { display: table-header-group }
tfoot { display: table-row-group }
tr { page-break-inside: avoid }
{% endcodeblock %}

を入れた。

あと、今回DBマイグレーションツールに[Phinx](https://phinx.org/)を使ってみたらわりと便利でよかった。ほんとはこれのマイグレーションにフックしてドキュメントを生成できたるするといいのかな。
