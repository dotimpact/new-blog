module.exports = {
  base: '/',
  plugins: [
    '@vuepress/blog',
    ['@vuepress/pagination',
      {
        postsFilter : ((p) => p.type === 'post' && !p.frontmatter.excluede)
      }
    ]
  ],
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css',
      crossorigin: "anonymous"
    }]
  ], evergreen: true
};