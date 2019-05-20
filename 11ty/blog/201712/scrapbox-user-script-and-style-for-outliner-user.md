---
title: Scrapboxをアウトライナーぽく使う人むけのuserScript/Style
date: 2017-12-06
status: p
tags:
   - scrapbox
   - activity
   - blog
---

とりあえず不満だったとこに対応したやつ

#### 行の付加情報用の文字修飾UserStyle

{% image "https://i.gyazo.com/f8d7985b5705b5eae358ab71eebd015e.png " %}

noteのあるアウトラインを持ってきたりするときに、強弱がなくてごちゃごちゃするのでほしかった。

{% codeblock "lang:css " %}
code:style.css
  .deco-\~ {
    font-size: 0.8em;
    color: #999;
  }
{% endcodeblock %}


リンクをコピーする用に[Copy Link](https://chrome.google.com/webstore/detail/create-link/gcmghdmnkfdbncmnmlkkglmnnhagajbm?hl=ja)に`	%text% [~ %url%]`というのを追加して使っている。文字全体をリンクにすると青色ばっかりになってこれまたうるさいので。

{% image "https://i.gyazo.com/1942d0864d72da70ddb006662220ae7b.png 400 " %}


{% image "https://i.gyazo.com/7a8469e83268df55727835cf3d24f94b.png 600 " %}

#### 選択テキストの検索結果にリンクするUserScript

{% image "https://i.gyazo.com/0125455bc73b897c80af7a6e8fbebd5d.gif 500 " %}

---

[文字列を選択してScrapbox内検索](https://scrapbox.io/customize/%E6%96%87%E5%AD%97%E5%88%97%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%A6Scrapbox%E5%86%85%E6%A4%9C%E7%B4%A2)から発展したもの。Scrapboxのダイナミックリンク楽しいんだけど、行の情報に対するタグ的に使うと一覧性がなくて、検索結果のほうがみたいと思うことが多いのでそうするやつ。個人的にはハッシュ形式のリンククリックの挙動が変えられるなら検索結果のほうにしたい。

{% codeblock "lang:javascript" %}
code:script.js
  scrapbox.PopupMenu.addButton({
    title: '検索リンク',
    onClick: function (text) {
      var projectName = 'YOUR PROJECT NAME';
      return '[' + text + ' https://scrapbox.io/'+ projectName +'/search/page?q=' + encodeURIComponent(text) + ']';
    }
   });
 {% endcodeblock %}
