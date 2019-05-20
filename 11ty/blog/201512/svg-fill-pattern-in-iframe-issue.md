---
title: iframe内のsvgではfillパターンが使えない（バグ？）
date: 2015-12-07
pid: 22726a4ccbee7cf632c615fd67e8644b
status: p
tags:
   - webdev
   - blog
---

先日開発ではまったやつ。iframe内のhtmlページに方眼線のようなものをsvgで作って敷こうとしていたら、通常のhtmlなら問題ないsvgがiframe内だと正しく表示されない。いろいろ試した結果、svg内で登録したパターンを塗りつぶし色として使うfillパターンがiframe内だと適用されないのがわかった。これバグなのかな。

- 同様の報告
	- [html - SVGs inside iframes having strange inconsistency problems - Stack Overflow][1]

とりあえずfillパターンでの繰り返しじゃなくてsvgのユニットをbackground-imageのリピートで敷き詰めるようにしてみた。

[1]:	http://stackoverflow.com/questions/26694141/svgs-inside-iframes-having-strange-inconsistency-problems