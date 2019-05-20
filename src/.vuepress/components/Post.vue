<template>
    <div>
        <div class="section is-paddingless-horizontal">
            <h3 class="title is-2">{{post.title || 'No Title'}}</h3>
        </div>
        <slot/>
        <div class="section is-paddingless-horizontal">
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <span class="is-size-7 has-text-grey-light">{{post.frontmatter.date}}</span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="tags">
                    <span class="tag" v-for="c in post.frontmatter.tags">
                        <router-link :to="'/tag/' + c">{{c}}</router-link>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['post']
  }
</script>
