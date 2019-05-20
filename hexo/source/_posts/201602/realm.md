title: Realmを使ってみる
date: 2016-02-05
pid: b94b7ef7f17d2394d6fbdf458dadc7b0
status: p
tags:
- iosdev
- xcode
- swift
- blog
---

[Realm is a mobile database: a replacement for SQLite & Core Data ][1]

新しいiOSアプリのデータストアはRealmを使ってみることにした。過去のiOS開発だとCoreDataを使ったりSQLite+FMDBを使ったりしていて、CoreDataは二度と使いたくない感じだったし、SQLiteは初期データを入れたDBファイルを使うプロジェクトでは便利だったけど今回はそういう要件もないので新し目の技術にした。

で触ってみているけどこれはだいぶ便利なのではないだろうか。なにがいいってモデルと別にスキーマを管理しなくていいとこがいい。永続化されるデータをほぼモデルそのものと考えることができる。APIも（RealmSwiftだと）rubyライクというか、まっとうなSwiftライブラリだということかもしれないけど、納得感が高い。

ひたすらありがたいなこれはーと思いながら実装している。

[1]:	https://realm.io/jp/