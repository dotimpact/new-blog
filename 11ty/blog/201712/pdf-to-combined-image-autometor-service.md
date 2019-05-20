---
title: pdfのページを一覧する画像を作ってgyazoに投げるautometorサービス
date: 2017-12-07
status: p
tags:
   - autometor
   - activity
   - blog
---

scansnapでスキャンしたメモがまとまったpdfとか、pdf開かなくても全ページまとまった画像になってるといいなーと思ったのでつくった。

{% image "https://i.gyazo.com/48d3d5c3fefd2ae899d646d38dcbdeb0.png 600 " %}

imagemagickと[uiureo/gyazo\-cli](https://github.com/uiureo/gyazo-cli)が必要。gyazoのcliはGO製の[Tomohiro/gyazo\-cli](https://github.com/Tomohiro/gyazo-cli)もあるみたいだけど前者は`--quiet`があったのでそっちで。

montage(画像を連結するimagemagickのツールのひとつ)はノーオプションだとサムネイルサイズの画像を作ってしまうので、入力画像をそのまま連結する`-mode concatenate`にする（参考：[Combine multiple images using ImageMagick \- Super User](https://superuser.com/questions/290656/combine-multiple-images-using-imagemagick)）。

こういうのができる。

{% image "https://i.gyazo.com/e7e29300103a7e52041c0b3bc5f2e651.png 600 " %}

論文とか自炊した本とかページ数が多いpdfだとgyazoに画像がでかすぎると怒られるので、最初の数ページだけにするとか、ほかにも工夫のしがいがありそう。
