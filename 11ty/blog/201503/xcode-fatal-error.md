---
title: XCodeプロジェクトに「Resources」というFolder referenceを作るとiOSシミュレータでのアプリ起動に失敗する
date: 2015-03-03
pid: 6d3204ec458bfc4b2a9aecd0f9ff0212
status: p
tags:
   - xcode
   - blog
---

{% image "/images/201503/xcode-fatal-error.png " %}

XCodeで新規プロジェクトをつくってとあるアプリのプロトタイプをつくっていたら、突然ビルド後に「Unable to run app in simulator」というエラーが出るようになって困った。

試行錯誤してわかったのは、

* プロジェクトに「Resouces」というFolder referenceを作ると、以後アプリ起動できなくなる
	* エラーは「LaunchServiceErrorDomain, Code=0」だったり「NS POSIX ErrorDomain, Code=22」だったりいろいろっぽい
	* Folder referenceじゃなくてGroupだったら問題ない
	* 「Resources」 iOS/OSXのアプリコンテナのディレクトリで使用される名前なのでそれと衝突する名前だとだめっぽい
* 一度上記の症状になると「Resouces」のreferenceを削除しただけではエラーは消えない
* \~/Library/Developer/Xcode/DerivedData内の該当プロジェクトのビルドフォルダを削除してから再度ビルドすると治る

ということらしかった。