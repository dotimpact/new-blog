---
title: nibnameなしでViewControllerをinitするとiOS8だけでクラッシュする
date: 2016-03-30
pid: c1c75c0bd717ef53960e41fa8d5acecf
status: p
tags:
   - swift
   - iosdev
   - blog
---

配信したアプリがログイン後に落ちたりスプラッシュで落ちたりする、という報告を受けて、自分のところでは起きていなかったのでなんだろうと思って調べたら、画面の初期化時に読み込んでいるカスタムViewControllerのinitが間違っていて、しかもそれでもiOS9は動くためだった。

対応するnibを持つSubViewControllerを、

override func viewDidLoad() {
...
self.subVC = SubViewController()
}

と引数なしで生成すると、iOS9ではnibを探してロードしてくれるようで（ちゃんと調べてないけどそうなんだと思う）問題ないんだけど、iOS8は読み込まれないのでOutletのオブジェクトに触ろうとするとクラッシュする。

override func viewDidLoad() {
...
self.subVC = SubViewController(nibname: "SubViewController", bundle: nil)
}

と正しく初期化すると問題ない。

[swift - addSubview from xib - iOS 8 vs iOS 9 - Stack Overflow][1]

あと、

[iOS8系をサポートするなら、UILabelやUITextViewのフォントにHiraginoSansは使わないほうが良い - Qiita][2]

{% blockquote %}
   - Xcode7でiOS8系をサポートしたアプリを作成するときに、Interface Builder上(xibやstoryboard)で UILabel やUITextView のフォントに HiraginoSans を利用するViewControllerを作成すると、その画面ヘの遷移が遅くなる
	- 体感では、1つの HiraginoSans フォントを利用したUIパーツを配置する毎に1秒弱ずつ遅くなる
	- 現象が発生するのはアプリ初回起動時のみ
- これはフォントに依存する問題で、System FontやTimes New Romanなど他のフォントを利用すると再現しなかった
{% endblockquote %}

こんな恐ろしい情報もあったので全部のUILabelのフォントを再設定した。  



[1]:	http://stackoverflow.com/questions/34045998/addsubview-from-xib-ios-8-vs-ios-9
[2]:	http://qiita.com/manji602/items/346226435594d36c2e9b