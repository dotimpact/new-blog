---
title: AspectMockを使うクラスでyieldを使ってるとき
date: 2015-11-19
pid: 5e35241020bcc8fa26af6e6ba9139343
status: p
tags:
   - webdev
   - php
   - testing
   - blog
---

AspectMockでモッキングするクラス（に依存するクラス）でyieldを使ってると、AspectMockが注入するコードがreturnで値を返そうとするためエラーになる。

	PHP Fatal error:  Generators cannot return values using "return" in /...

とりあえずキャッシュコードのreturnをyieldに変えて動かしてたけど、もうissueになっててdev-masterでは解消されているっぽい。

[Generators result in fatal error · Issue #50 · Codeception/AspectMock][1]

Composerでdev-masterのモジュールをインストールする（"minimum-stability": "dev"にしてもいいけどこれだと全モジュールのdev-masterが入る）

	"require-dev": {
	   ...
	   "codeception/aspect-mock": "dev-master"
	   ...
	}

上記修正は返り値のキーワードをPHPDOCの@returnで判別するものなので、AspectMockのキャッシュを消して、yieldを使ってるメソッドのPHPDOCの@returnに `\Generator` を書く（`Generator`だけだとだめだった）

	/**
	 * @param $name
	 * @return \Generator
	 */
	public function generatorMethod($name)

これで動いた。AspectMock黒魔術感あってハマると苦しい…。

[1]:	https://github.com/Codeception/AspectMock/issues/50%0A