---
title: Drive File Streamを再インストール
date: 2017-12-18
status: p
tags:
   - blog
---

[ドライブ ファイル ストリームを導入する \- G Suite 管理者 ヘルプ](https://support.google.com/a/answer/7491144?hl=ja)

---

会社でだいぶ前にクラウドストレージをDropBoxの企業プランからGoogle Drive(G Guite)の有料プランに切り替えて以来、Google Driveクライアントの出来の悪さに辟易としていたのでDrive File Streamにはかなり期待していたんだけど、実際にリリースされてみたらクラウドドライブとしての機能がさらに下がってしまったのでGDriveはもうwebベースでしか使わなくなっていた。

いちばん困っていたのは仮想化されたファイルがロードされるときに仮想ドライブがアンマウントされてしまい、実質的にファイルが開けないとこで、これはさすがに何かの不具合じゃないかと思い立ってDrive File Streamクライアントを再ダウンロードして指示通りにサイレントインストールしてみた。

{% codeblock %}
% hdiutil mount GoogleDriveFileStream.dmg; sudo installer -pkg /Volumes/Install\ Google\ Drive\ File\ Stream/GoogleDriveFileStream.pkg -target "/Volumes/Macintosh HD"; hdiutil unmount /Volumes/Install\ Google\ Drive\ File\ Stream/
{% endcodeblock %}

再インストールしてみたら、入れ直したせいなのかサイレントインストールが必要だったのかそれとも使ってないうちにクライアントがアップデートされたのかわからないけど、ロード時にアンマウントされる現象は起きなくなった。

でも相変わらずフォルダをFinderの「よく使う項目」に登録してもアンマウント時に消えてしまうし、シンボリックリンクはできないしでアクティブなフォルダとしては使い物にならないと思う。
