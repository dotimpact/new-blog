---

title: Hexoプラグインを試作した
date: 2015-03-04
pid: 3d68d0927ecc89e96da5f8a67d2ea2f2
status: p
tags:
   - hexo
   - plugin
   - javascript
   - activity
---

せっかく毎日blogを書いているので、月末にまとめ記事を作れるようにしたいなと思っていて、それを実現するHexoプラグインを手探りでつくった。

{% codeblock %}
{% raw %}
{% monthly\_post\_list 201502 book %}
{% endraw %}
{% endcodeblock %}

とすると、2015年2月のbookタグを持ったポストの一覧が生成される。

使ったページがこれ。
* [2015年1月のまとめ][1]
* [2015年2月のまとめ][2]

{% gist 67957fd4d6db9323b503 %}

とりあえずHexoのブログフォルダのscriptsに置けば動くけどあとで正式なプラグインにしよう。

[1]:	/2015/01/31/201501/201501-summary/
[2]:	/2015/02/28/201502/201502-summary/
