<template>
    <div>
        <section class="section is-paddingless-horizontal">
            <div class="container grid">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <router-link to="/">text perforation</router-link>
                        </li>
                        <li class="is-active">
                            <router-link :to="$page.path">{{$page.path}}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <section class="section is-paddingless-horizontal" style="padding-top: 0;">
            <div class="container grid" style="max-width: 1024px;">
                <post :post="$page">
                    <div class="content">
                        <Content/>
                    </div>
                </post>
            </div>
        </section>
        <section class="section">
            <div class="container is-large">
                <nav class="level">
                    <div v-if="prev" class="level-item has-text-left">
                        <div>
                            <p>« {{prev.frontmatter.date}}</p>
                            <p>
                                <router-link :to="prev.path">{{ prev.title || prev.path }}</router-link>
                            </p>
                        </div>
                    </div>
                    <div v-if="next" class="level-item has-text-right">
                        <div>
                            <p>{{next.frontmatter.date}} »</p>
                            <p>
                                <router-link :to="next.path">{{ next.title || next.path }}</router-link>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

        <hr/>
        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
  import Hero from '../components/Hero'
  import BottomNav from '../components/BottomNav'
  import Post from '../../components/Post'

  export default {
    name: 'Page',
    components: {Hero, BottomNav, Post},
    computed: {
      posts() {
        return this.$site.pages.filter(p => p.type === 'post').sort((a, b) => Date.parse(a.frontmatter.date) - Date.parse(b.frontmatter.date))
      },
      curIdx() {
        return this.posts.findIndex(p => p.path === this.$route.path)
      },
      prev() {
        return this.posts[this.curIdx - 1]
      },
      next() {
        return this.posts[this.curIdx + 1]
      }
    },
    mounted() {
      console.log(this);
      console.log(this.posts);
    }
  }
</script>

<style src="../styles/theme.css"></style>