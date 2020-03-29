<template>
  <Layout>
    <div class="container">
      <div class="hero">
          <h1 class="hero-title">Projets</h1>
      </div>
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectsGrid from "@/components/ProjectsGrid"

export default {
  components: {
    ProjectsGrid
  }
}
</script>
