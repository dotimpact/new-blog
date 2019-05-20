<template>
    <div>
        <div :key="page.key" v-for="page in pages" >
            <post :post="page">
                <p v-if="page.frontmatter.description">{{page.frontmatter.description}}</p>
                <p class="is-text-right">
                    <router-link :to="page.path">読む</router-link>
                </p>
            </post>
            <hr/>
        </div>
    </div>
</template>
<script>
  import Post from './Post'

  export default {
    name: 'Articles',
    props: ['pages'],
    components: {Post},
  }
</script>