title: Apple World Wide Developer Relation証明書の期限切れ
date: 2016-02-16
pid: 26e3f28780458c21add7141fa60fc1dc
status: p
tags:
- iosdev
- blog
---

Adhocビルドをdeploygateで配信しようとしたら、有効なiPhone Distribution　 Certificateがないというエラーに。先週末は問題なかったのにと思いつつ調べてみると、Apple Developerライセンス自体が切れているわけではなく、iPhone Distributionで発行している証明書もまだ有効期限内。しかしKeyChainアプリで証明書を見ると「証明書の発行者が無効」というエラーになっていた。証明書のプロファイルを見ると、中間証明書であるApple World Wide Developer Relation Certificateが期限切れになってた。調べてみると2/14に切れてAppleDevで発行した証明書が一斉に無効になったらしい。こんなことがあるのか。

[【注意】Apple Worldwide Developer Relationsの期限切れ - Qiita][1][]()
[Uploading archive error: "Missing iOS Distribut... | Apple Developer Forums][3]

新しい中間証明書は2023-02-07までなので、前に切れたのも7年前だったならiOS開発者は初めて期限切れを経験したとかなのかな。

[1]:	http://qiita.com/anchen/items/7febe30dc24aed0827c0
[3]:	https://forums.developer.apple.com/message/114003