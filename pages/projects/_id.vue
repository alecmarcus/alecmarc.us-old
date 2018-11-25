<template>
  <section>
    <article>
      <p v-html="activeProject.brief"/>
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
      <v-project-image
        v-for="img in activeProject.imgs"
        :key="img.fileName"
        :file-name="img.fileName"
        :width="img.width"
        :project-id="activeProject.id"
        :project-name="activeProject.name" />
    </article>
    <v-project-nav />
  </section>
</template>

<script>
import VProjectNav from '~/components/VProjectNav.vue'
import VProjectImage from '~/components/VProjectImage.vue'
import { mapState, mapActions } from 'vuex'
// import projects from '~/assets/projects.json'

export default {
  components: {
    VProjectNav,
    VProjectImage
  },
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
  // data: () => ({
  //   projects
  // }),
  computed: {
    ...mapState({
      projects: state => state.projectView.projects,
      activeProject: state => state.projectView.activeProject,
      activeProjectId: state => state.projectView.activeProjectId,
      projectArray: state => state.projectView.projectArray
    })
  },
  created() {
    this.setActiveProject(this.$route.params.id)
  },
  destroyed() {
    this.setActiveProject(null)
  },
  methods: {
    ...mapActions({ setActiveProject: 'projectView/setActiveProject' })
  }
}
</script>

<style scoped>
p {
  margin: 1.25rem;
}

video {
  display: block;
  max-width: 100vw;
  margin: calc(119rem / 16) auto;
}

section {
  margin-bottom: calc(var(--nav-height) + 1.25rem);
}

@media (max-width: 450px) {
  section {
    margin-bottom: calc(1.7 * var(--nav-height));
  }
}
</style>
