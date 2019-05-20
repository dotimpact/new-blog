---
title: XCode7でビルド関連の名前にカッコやスペースを使っているとリンクに失敗する
date: 2015-11-27
pid: c33d74163f813309d7a98a5f99475032
status: p
tags:
   - xcode
   - blog
---

アプリ申請を控えているのでアップデートしないつもりがうっかりしてXCode7を入れてしまい、仕方がなく7での開発をしているときにぶち当たった問題。

Adhocビルドをアーカイブして配信しようとすると、

warning: (armv7) /Users/.../BuildProductsPath/Adhoc-iphoneos/libPods-JockeyJS.a(Jockey.o) unable to open object file: No such file or directory

みたいな感じのwarningが大量に出て、どうやらCocoapods含め使っているライブラリ全部で出てる様子。ビルド設定をあれこれ変えても変わらず、同様の設定でwarningが出ないビルドターゲットやプロジェクトとの差もよくわからないという中で見つけた情報がこれ。

[hundreds of warnings during Archive in Xcode 7 · Issue #4237 · CocoaPods/CocoaPods][1]

> we had build schemes named things like
> App Name (Debug)
> App Name (App Store)
> And we were getting the errors as well, removing the parenthesis fixed it for us as well.

僕のプロジェクトではschemeの名前を「anyApp(dev)」みたいにしてたののビルドで問題がおきてたのでカッコを取り除いたらwarningが出なくなった。

[1]:	https://github.com/CocoaPods/CocoaPods/issues/4237