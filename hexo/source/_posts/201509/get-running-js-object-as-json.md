title: ChromeのDeveloper Toolで実行中のJavascriptオブジェクトをJSONで取得する
date: 2015-09-15
pid: c007ac628f29d0d525b141a4217ae853
status: p
tags:
- develop
- javascript
- blog
---

[Chrome開発者ツールのコンソールに表示したObjectをクリップボードにコピーする - dackdive's blog][1]

というわけで既存Javascriptコードのテストをいまさら書いてるわけだけど、ユニットテストの入力を動いてるコードの変数から取れないかと思って調べたらChromeの開発者ツールのコンソールで`copy(変数)`とするとjsonで取れるのがわかった。これは便利。

[1]:	http://dackdive.hateblo.jp/entry/2015/09/10/100117