<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <div class="journal-header">
          <h1 v-html="$page.post.title" class="journal-title" /> 
        </div>

        <div v-html="$page.post.content" class="content" />

      </div>
    </div>
  </Layout>
</template>

<page-query>
query pagePost ($path: String!) {
  post: pagePost (path: $path) {
    title
    content
  }
}
</page-query>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
