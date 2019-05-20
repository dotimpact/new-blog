title: "人力LZW圧縮/展開/グリッチ"
date: "2017-04-18 00:00"
status: p
tags:
- sentan-prog-2017
- education
- blog
---

授業第２回。[去年](/2016/04/19/201604/easy-6502-and-sando)は山本さんに『算道』の実演をしてもらったりeasy6502を使った授業をしてたんだけど、今年はプログラムを書く体験の前の「プログラムを実行する体験」として、圧縮/展開アルゴリズムを受講生の手で実行してもらう授業をやってみた。

もともとは[Computer Science Unplugged](http://csunplugged.org/)を見てたなかでText Compressionのアクティビティが見た目楽しそうで、こういう「テキストが圧縮（コーディング）される」という結果が得られるアルゴリズムが題材なら、コンピュータとプログラムがすることを実感して興味を持ってもらえるイントロダクションの授業ができるんじゃないかと思ったことがきっかけ。

{% image https://i.gyazo.com/a388fe81d1357d3e3e67897b4e75cae4.png 400 %}
CS Unpluggedの「Text Compression」アクティビティの解説pdfより

でもよく考えたら圧縮アルゴリズムの内容ってよく知らなくてハフマン圧縮とかでできるのかなーと思いながら思って調べているうちに、テキストの圧縮過程を実感できそうでかつ学生も常々お世話になってるだろうLZW圧縮に決めた（検討には[データ圧縮法概説](http://www.snap-tck.com/room03/c02/comp/comp.html)がとても参考になった。最終的に例文にした早口言葉もこの概説の実演で使用されていたもの）。

当初「受講生の好きな歌の歌詞を圧縮させて、圧縮データを他の受講生と交換して展開する授業にしよう」と思っていたんだけど、実際に自分の手でLZW圧縮のアルゴリズムを実行してみると思った以上に時間がかかる（2,30文字の処理に20分以上）うえ、意図的に歌詞の繰り返しの多い歌を選ばないかぎりは圧縮のおもしろみも味わえない単なる作業になってしまうことが予想できたので、後ろ髪をひかれつつ元テキストは圧縮が効きやすい早口言葉（「カエルピョコピョコ…」）に固定して、プログラム手実行の過程を理解するところにフォーカスできるように手順やワークシートをまとめて授業に臨んだ。

{%image https://i.gyazo.com/4e55efa73cbe358b38f7d9106390ea59.png 400 %}
ワークシートその１（入力・出力）([pdf](https://drive.google.com/file/d/0B2XJUKfO5hQVQVpoRldDRDdfYXc/view))

{% image https://i.gyazo.com/e556239d8bd2508bb3090425f3aa9c42.png 400 %}
ワークシートその２（ワークメモリ：圧縮用辞書）（[pdf](https://drive.google.com/file/d/0B2XJUKfO5hQVVFdfUUZiTmtHV2M/view)）（[亜展開用辞書（内容は同じです）](https://drive.google.com/file/d/0B2XJUKfO5hQVbUZWT1JFSUdvWU0/view?usp=sharing)）

{% image https://i.gyazo.com/ae9c142adb824fc26e9dac923bbdbe06.png 400 %}
圧縮手順書（プログラム部）（[pdf](https://drive.google.com/file/d/0B2XJUKfO5hQVOVdYRDF5bWZWZ0U/view?usp=sharing) ）（[展開手順pdf](https://drive.google.com/file/d/0B2XJUKfO5hQVY1V3MkNzdER6c0U/view?usp=sharing)）

実行時のポインタの役割をするものとして色ごとに役割を決めた付箋を配って使ってもらうようにしたんだけど、これはなかなかうまくいったような気がする。実際に学生（8人）にやってもらったらやってるうちに手順を飛ばしてしまうことが続出したので、もう一つ付箋を配っていま実行している手順を指す（つまりプログラムポインタ）ようにしたほうがよかったかもしれない。手違いで途中からやり直しになってしまった人もいたけど、見たところみんな最初の意味のわからないことをやらされている、という感じから途中でこのアルゴリズムの巧妙さにはっと気づき、最後まで興味を持って作業してもらえていたように思う。

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BS-xuD9g-js/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">デバッグ中</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">kotaro tanakaさん(@doppac)がシェアした投稿 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-04-17T09:08:43+00:00">2017  4月 17 2:08午前 PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

そして、LZW圧縮といえばGIF画像の圧縮アルゴリズムであり、アーカイブデータのコードをいくつかスワップさせれば簡単にグリッチさせることができる。今回圧縮しているのは文字単位のテキストなので、「カエルピョコピョコミピョコピョコアワセテピョコピョコムピョコピョコ」が「エカルピョピョココミココアココワセココアョピテョムコ」になったりする。というのを、受講生にそれぞれ好きなところでグリッチしたデータを展開させて結果を見てもらった。これ、正常データとグリッチデータを両方手で展開してみると、データの入れ替えが辞書にどのように波及していくかがよくわかってとてもおもしろい。（4,5箇所グリッチするよう指示したけど、2つくらいでもいいのかも）。

というわけで、僕がこれまでいろいろ試したなかでも一番手応えのある授業になってよかった。来週からは普通のプログラミングの授業に入っていくけど、今回やったことがプログラム言語の諸概念の参照（変数は人力圧縮でいうところのワークシートのところだよとか）にできるはずなので、そこの飲み込みやすさにもつながるといいなと思う。あと以前からデバッガのおもしろさをプログラミング入門の文脈で使えないものかなと思ってたんだけど、考えてみると今回のはその点にもかなっている面があって個人的な満足度が高い。
