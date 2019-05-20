<template>
    <nav v-if="count > 1" class="pagination is-centered" role="navigation" aria-label="pagination">
        <a :disabled="!pagination.hasPrev" :href="pagination.prevLink" class="pagination-previous">Previous</a>
        <a :disabled="!pagination.hasNext" :href="pagination.nextLink" class="pagination-next">Next page</a>
        <ul class="pagination-list">
            <li v-if="pagination.paginationIndex > 1"><a :href="pagination._paginationPages[0].path" class="pagination-link"aria-label="Goto page 1">1</a></li>
            <li v-if="pagination.paginationIndex > 2"><span class="pagination-ellipsis">&hellip;</span></li>
            <li v-if="pagination.hasPrev" ><a class="pagination-link" :href="pagination.prevLink" :aria-label="`Goto page ${prevIndex}`">{{prevIndex}}</a></li>
            <li><a class="pagination-link is-current" :aria-label="`Page ${pagination.paginationIndex+1}`"
                   aria-current="page">{{pagination.paginationIndex+1}}</a></li>
            <li v-if="pagination.hasNext" ><a class="pagination-link" :href="pagination.nextLink" :aria-label="`Goto page ${nextIndex}`">{{nextIndex}}</a></li>
            <li v-if="count > 3 && pagination.paginationIndex < count-3"><span class="pagination-ellipsis">&hellip;</span></li>
            <li v-if="count > 3 && pagination.paginationIndex < count-2"><a class="pagination-link" :href="lastPage.path" :aria-label="`Goto page ${count}`">{{count}}</a></li>
        </ul>
    </nav>
</template>
<script>
    export default {
      props:["pagination"],
      computed: {
        count() { return this.pagination._paginationPages.length},
        prevIndex() { return this.pagination.paginationIndex },
        nextIndex() { return this.pagination.paginationIndex + 2 },
        lastPage() { return this.pagination._paginationPages[this.count-1]}
      }
    }
</script>