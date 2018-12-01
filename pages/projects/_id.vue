<template>
  <section>
    <article class="description">
      <p v-html="activeProject.brief"/>
      <div>
        <div>
          <h1>Role:</h1>
          <p>{{ activeProject.role }}</p>
        </div>
        <div>
          <h2>Media:</h2>
          <p>{{ activeProject.media }}</p>
        </div>
        <div>
          <h3>Scope:</h3>
          <p v-html="activeProject.scope" />
        </div>
      </div>
    </article>
    <article v-if="activeProject.vids">
      <v-project-video
        v-for="vid in activeProject.vids"
        :key="vid"
        :file-name="vid"
        :project-id="activeProject.id"
        :project-name="activeProject.name" />
    </article>
    <article>
      <v-project-image
        v-for="img in activeProject.imgs"
        :key="img.fileName"
        :file-name="img.fileName"
        :width="img.width"
        :project-id="activeProject.id"
        :project-name="activeProject.name"
        :image-caption="img.caption" />
    </article>
    <v-project-nav />
  </section>
</template>

<script>
import VProjectNav from '~/components/VProjectNav.vue'
import VProjectImage from '~/components/VProjectImage.vue'
import VProjectVideo from '~/components/VProjectVideo.vue'
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  components: {
    VProjectNav,
    VProjectImage,
    VProjectVideo
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
  data: () => ({
    projects
  }),
  computed: {
    ...mapState({
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
.description {
  font-size: calc(var(--font-size) / 1.25 / 1.25);
  margin: 1.25rem;
  display: flex;
  justify-content: space-between;
}

.description > * {
  width: calc((100% - 1.25rem) / 2);
}

.description > div {
  display: flex;
  flex-flow: column nowrap;
}

.description > div > div:not(:last-of-type) {
  margin-bottom: 1.25em;
}

p,
h1,
h2,
h3 {
  font-size: inherit;
  margin: 0;
  display: block;
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
