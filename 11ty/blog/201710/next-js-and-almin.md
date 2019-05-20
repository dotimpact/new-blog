---
title: Almin on Next.js
date: 2017-10-20
status: p
tags:
   - javascript
   - blog
---

いまつくってる新しいアプリで、せっかくなので新しいフレームワーク使おうと[Almin](https://github.com/almin/almin)と[Next.js](https://github.com/zeit/next.js/)を使っている。

最初のころNext.jsのクライアントレンダリングとサーバサイドレンダリングの違いの意味がよくわかってなくて、Alminとどう連携させればいいのか試行錯誤が続いたんだけど、ようやくこうすればいいというのがわかった。

{% codeblock "lang:javascript " %}
const dispatcher = new Dispatcher()
const storeGroup = new StoreGroup({
  DataState: new DataStore(dataRepository)
})
const appContext = new Context({
  dispatcher,
  store: storeGroup,
  options: {
    strict: true
  }
})

async function loadData(req) {
  return new Promise(resolve => {
    if(req) {
      // サーバサイドだったらdbから読む
      const data = db.data.find().toArray()
      resolve(data)
    } else {
      // クライアントサイドだったらapiから取得
      axios('/api/data.json')
      .then((response) => {
          resolve(response)
        })
      });
    }
}

export default class extends React.Component {

  static async getInitialProps ({req}) {
    const data = await loadData(req)
    return { data }
  }


  componentWillMount () {
    // Alminにデータを渡すのはgetInitialPropsではなくここで
   if (this.props.data) {
     appContext.useCase(LoadDataUseCase.create()).execute(this.props.data)
   }
 }
}
{% endcodeblock %}
