title: devdによるクロスプラットフォームのローカルjsアプリ配布
date: 2015-12-08
pid: ce7fa399d05bac35dd692ecb22a8ecc1
status: p
tags:
- webdev
- blog
---

[cortesi/devd][1]

最終的にサーバで動作するjsアプリをローカルで開発/テストしてもらおうとすると、ローカルファイルとして開くと他のローカルコンテンツをajaxで取得するのに制約があるのでちょっと策を講じる必要がある。開発者なら[pow][2]を使うなり好きな方法でローカルサーバごしにアクセスしてもらうようにすればいいけど、非開発者でwindowsユーザのことも考えるといろいろインストールさせる説明をするのが憂鬱だし[Chromeをオプション付きで起動][3]というのも大げさな感じ。マルチプラットフォームで実行ファイルから簡単に立ち上げられるローカルサーバないのかなと探していてdevdというgo製のシンプルなwebサーバを見つけた。これでいけそう。

アプリのデータを置いたディレクトリにdevdもいれておいて、windowsなら

<script src="https://gist.github.com/dotimpact/ab383d46289a6ca03e4f.js"></script>

みたいなバッチファイルを開いてもらえば`devd.io:8000`でローカルサーバごしにjsアプリを触れる。

OSXはこう。

<script src="https://gist.github.com/dotimpact/1e14f29e3023c4d67b8e.js"></script>

`-l`オプションもつけるとファイル更新時にリロードしてくれるんだけど、これはまだ不安定なのか環境によってはクラッシュするみたいだったので今は外してある。


[1]:	https://github.com/cortesi/devd
[2]:	http://pow.cx/
[3]:	http://qiita.com/growsic/items/a919a7e2a665557d9cf4