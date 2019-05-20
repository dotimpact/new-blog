title: symbolicatecrashの処理が終わらないクラッシュレポート
date: 2016-09-28
pid: 87a47c66b65976f6d633e36a878f8940
status: p
tags:
- iosdev
- blog
---

iOSアプリのクラッシュ時に吐き出されるクラッシュレポートのメモリイメージをシンボルテーブルと引き合わせてヒューマンリーダブルなスタックトレースを得るsynbolicateというのをいままでやったことなかったんだけど、今回再現しないクラッシュの原因究明のためにやってみた。んだけど、なんか処理が終わらないように見える。初めてだったのでこういうもんかなとずっと待ってみたんだけど、やっぱり終わらない。perlスクリプトだというsymbolicatecrash（[ここ][1]のを落とした）をいじって動作状況をみてみたところ、クラッシュリポートのメモリイメージに循環参照（？　じゃなくて、単に同じメモリイメージの項目が大量にあるので処理に時間んがかかるだけかな）があってそこでシンボル検索が無限ループになって終わらないようになっているっぽかった。

	while ( length($nextIDKey) ) {
		last if ( !length($images{$nextIDKey}{nextID}) );
		$nextIDKey = $images{$nextIDKey}{nextID};
	}

というとこを、

	while ( length($nextIDKey) ) {
		last if ( !length($images{$nextIDKey}{nextID}) );
		$nextIDKey = $images{$nextIDKey}{nextID};
		last if ( $nextIDKey == $images{$nextIDKey}{nextID} );
	}

とかしたらとりあえず出力された。

同様の症状についての記事。クラッシュレポートのライブラリアドレステーブルが変になるのはiOS9からの現象らしい。
- [PLCR 1.2 and problematic crash logs generated under iOS 9 - Google グループ][2]
- [ios - iOS9: duplicated lines in crash reports are causing symbolicatecrash to get stuck - Stack Overflow][3]

[1]:	https://github.com/bitstadium/QuincyKit/blob/develop/server/local/symbolicatecrash.pl
[2]:	https://groups.google.com/forum/#!msg/plcrashreporter/i6rYc2f4yBo/G8uBTEnMAgAJ
[3]:	http://stackoverflow.com/questions/31920423/ios9-duplicated-lines-in-crash-reports-are-causing-symbolicatecrash-to-get-stuc