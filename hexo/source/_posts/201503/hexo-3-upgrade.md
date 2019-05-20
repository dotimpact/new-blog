title: Hexoを3.0.0-rc.4にアップグレードした
date: 2015-03-02
pid: 93ff29db3bfafc81030a474ed22bd6bc
status: p
tags:
- hexo
- javascript
- blog
---

なぜかいつのまにかHexoが動かなくなっていたので勢いで3.0.0-rc.4にしてみたら、けっこう各部が動かなくて困った。

archive画面でget\_postsで記事をリスティングしてたのが動かなくなってて（v3ではヘルパーのget\_postsが廃止されたそうだ）、しかもその代替コードがいまいちよくわからなったのだが、

{% codeblock %}
   \<% site.tags.find({name: 'work'}).data[0].posts.sort('date', -1).forEach(function(item){ %\>
	  <li><a href="<%- config.root %><%- item.path %>"><%= item.title %></a></li>
   \<% }); %\>
{% endcodeblock %}

にしたらひとまず動いた（postsを取るもっといいインターフェイスがないとおかしい気がするのだが）。

あとhexo-generator-feedがnpmにあるのだとv3に対応してないので、

{% codeblock %}
npm install git+https://git@github.com/hexojs/hexo-generator-feed.git --save
{% endcodeblock %}

とgitのを入れて間に合わせた。

今日はとりあえずここまで。
