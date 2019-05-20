---
title: Webpackモジュールのプライベート関数をユニットテストしたい
date: 2016-06-29
pid: e3aa0a55d3b2ec82f24cfa854d28c2cb
status: p
tags:
   - webdev
   - javascript
   - webpack
   - testing
   - blog
---

レガシーなJavaScriptソースをWebpackでビルドできるようにモジュールに切り分けてテストを書くことをしている（わりとヒマなので）。

jsモジュール内の機能をプライベート関数に分割して書く場合に、そのプライベート関数部分の単体テストを書きたい場合があると思うんだけど、それをどうやればいいのかわからなくていろいろ調べた。

[unit testing - How to access and test an internal (non-exports) function in a node.js module? - Stack Overflow][1]

こういう話で、ここでは[rewire][2]を使えという事になってるんだけど、これはうまくいかなかった。[rewire-webpack][3]というのもあるんだけど、これもだめだった。

でうまくいったのは、[exports-loader][4]でプライベート関数を指定してエクスポートする方法で、

{% codeblock "lang:javascript " %}

function privateFunc() {
return "private";
}

function exportFunc() {
return "export";
}

module.exports = exportFunc;

{% endcodeblock %}

こういうモジュールのテストを

{% codeblock "lang:javascript " %}

describe('test', function() {

it('モジュールのテスト', function() {
var exportFunc = require('export-module.js');
expects(exportFunc()).toBe('export');
});

it('プライベート関数のテスト', function() {
var privateFunc = require("exports?privateFunc!./export-module.js");

expects(privateFunc).toBe('private');
});
});

{% endcodeblock %}

こんな感じにしたらうまくいった。

[1]:	http://stackoverflow.com/questions/14874208/how-to-access-and-test-an-internal-non-exports-function-in-a-node-js-module
[2]:	https://github.com/jhnns/rewire
[3]:	https://github.com/jhnns/rewire-webpack
[4]:	https://github.com/webpack/exports-loader