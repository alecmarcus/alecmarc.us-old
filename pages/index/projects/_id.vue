<template>
  <div>
    <article>
      <p>{{ activeProject.brief }}</p>
    </article>
    <article >
      <video
        v-for="vid in activeProject.vids"
        :key="vid"
        :src="'/img/'+activeProject.id+'/'+vid"
        autoplay
        muted
        loop />
    </article>
    <article>
      <img
        v-for="img in activeProject.imgs"
        :key="img"
        :src="'/img/'+activeProject.id+'/'+img"
        :alt="activeProject.name">
    </article>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  validate({ params }) {
    return isNaN(+params.id)
  },
  asyncData({ params, store, error }) {
    const project = params.id
    if (!project) {
      return error({
        message: 'Project not found.',
        statusCode: 404
      })
    }
    return project
  },
  head() {
    return {
      title: this.name
    }
  },
  data: () => ({
    projects
  }),
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  }),
  created() {
    this.setActiveProject(this.$route.params.id)
  },
  destroyed() {
    this.setActiveProject(null)
  },
  methods: mapActions({ setActiveProject: 'projectView/setActiveProject' })
}
</script>

<style scoped>
div {
  margin-top: 20px;
}

img {
  display: block;
  max-width: 100vw;
  margin: 119px auto;
}
</style>
