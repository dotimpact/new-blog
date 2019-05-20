title: El Capitanのライブ変換
date: 2015-10-05
pid: 1b51e872915a3e52c705766fe4db0667
status: p
tags:
- macosx
- blog
---

手持ちのMacbook Proはまだ突然落ちることがあるから怖くてアップデートできないけど、会社のiMacはEl Capitanにしてみてた。アップデートしたあと、思わずサイトの変更点を確認しにいってしまったくらいどこが変わったのかわからない。4KのiMacだとSpacesの切り替え時に露骨にフレームが落ちる感じがあったけど、それがやや緩和された感があるのでパフォーマンスは多少上がっているのかな。あとは[SIP][1]の導入でこれまで使っていたFinder置き換えアプリ（totalFinder）が通常では使えなくなってしまったので、とりあえずアンインストールしてファイル操作はどうするか改めて考え直すことにしてみた。

事前のレビューで評判を聞いていた標準日本語IMEのライブ変換機能も試してみた。確かに新感覚でおもしろい。が、うーむ、慣れの部分も大きいんだろうけど第一印象としてはメリットがよくわからないわりに弊害がひどいという感じだった。未確定状態がなくなるからスムーズというのは最終結果としてはそうなんだけど、そのかわりに入力の途中の状態では「間違った確定状態」を見せられることになる。たとえば「展示する」と入力したいときに「てん」まで入力した時点で「点」にライブ変換されることを無視する必要があるのは新しいコストで、僕の感覚だとかなりつらいというか、おつかいで買う品目を唱えながら店に向かう道すがら別の言葉に出会った拍子に唱えている品目が入れ替わってしまう感じの途中で目的を忘れる効果を感じる。また、ライブ変換で定着した（ように見える）文字列をバックスペースで直そうとするときの挙動が予想できないというか、結局頭の中で未変換のひらがな文字列を保持していてそれの末尾文字を削除していくことを想像しつつ、さらにそれが1文字づつ削れる段階でどうライブ変換されるかを予想しないとキーを押すたびに何が起きたのか立ち止まらないといけないため、結局全部削除したほうが早いみたいな感覚になる。Androidのシステムバックボタンの挙動がアプリによって不定な問題に似ていてこれもかなりストレス。

辞書とか文章のコンテキストからの類推がよりインテリジェントになって、キー入力している中間状態も含めて書きたい理想的なかな漢字まじり文が常に表示されているならばいいんだと思うけど、ちょっと道が遠い感じがするな。

[1]:	https://www.wikiwand.com/en/System_Integrity_Protection