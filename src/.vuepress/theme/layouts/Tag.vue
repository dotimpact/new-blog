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
                            <router-link :to="'/tag/'+$route.meta.tagName">tag: {{$route.meta.tagName}}</router-link>
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
                <pagination :pagination="pagination"/>
            </div>
        </section>
    </div>
</template>

<script>
  import Hero from '../components/Hero'
  import BottomNav from '../components/BottomNav'
  import Articles from '../../components/Articles'
  import Pagination from "../components/Pagination";

  export default {
    name: 'Tag',
    components: {Hero, Pagination, BottomNav, Articles},
    data() {
      return {
        pagination: {
          posts: []
        }
      }
    },
    computed: {
      posts() {
        return this.pagination.posts
      },
    },
    created() {
      // Pagination({}, this.paginate)
      this.pagination = this._createPagination(this.$tag.posts);
    },
    mounted() {
      console.log(this.pagination);
    }
  }
</script>
