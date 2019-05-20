<template>
    <div>
        <section class="section is-paddingless-horizontal">
            <div class="container grid">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li class="is-active">
                            <router-link to="/">text perforation</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <section class="section is-paddingless-horizontal" style="padding-top: 0;">
            <div class="container grid" style="max-width: 1024px;">
                <articles :pages="posts"/>
            </div>
        </section>
        <section class="section is-paddingless-horizontal" style="padding-top: 0;">
            <div class="container grid" style="max-width: 1024px;">
                <pagination :pagination="$pagination"/>
            </div>
        </section>
    </div>
</template>

<script>
  import Hero from '../components/Hero'
  import BottomNav from '../components/BottomNav'
  import Articles from '../../components/Articles'
  import Pagination from '../components/Pagination'

  export default {
    name: 'Layout',
    components: {Hero, Pagination, BottomNav, Articles},
    computed: {
      posts() {
        return this.$pagination.posts
      },
    },
    mounted() {
      console.log(this.$pagination);
    }
  }
</script>

<style src="../styles/theme.css"></style>