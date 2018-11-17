<template>
  <div
    id="focusedProject"
    class="lg-view">
    <aside id="viewSelect">
      <button
        id="largeView"
        title="View full width">
        <img
          src="assets/img/lg-view.svg"
          alt="Large Layout">
      </button>
      <button
        id="smallView"
        title="View all">
        <img
          src="assets/img/sm-view.svg"
          alt="Small Layout">
      </button>
    </aside>
    <section class="proj-info">
      <div class="col-2 col-sm-2 off-2 off-sm-0 off-md-0">
        <p class="heading label name">Title</p>
        <p id="name">{{ activeProject.name }}</p>
        <p class="heading label client">Client</p>
        <p id="client">{{ activeProject.client }}</p>
      </div>
      <div class="col-2 col-sm-2">
        <p class="heading label time">Timeframe</p>
        <p id="time">{{ activeProject.time }}</p>
        <p class="heading label scope">Scope/Format</p>
        <p id="scope">{{ activeProject.scope }}</p>
      </div>
      <div class="col-sm-4 col-md-4 col-5">
        <p class="heading label brief">Description</p>
        <p id="brief">{{ activeProject.breif }}</p>
      </div>
    </section>
    <section
      id="projVis"
      class="proj-vis">
      <video
        v-for="vid in activeProject.vids"
        :key="vid"
        :src="'/img/'+activeProject.id+'/'+vid"
        autoplay
        muted
        loop />
      <img
        v-for="img in activeProject.imgs"
        :key="img"
        :src="'/img/'+activeProject.id+'/'+img"
        :alt="activeProject.name">
    </section>
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
    // if (this.$store.state.activeProject == null) {
    //   this.setActiveProject(this.$route.params.id)
    // }
    this.setActiveProject(this.$route.params.id)
  },
  methods: mapActions({ setActiveProject: 'projectView/setActiveProject' })
}
</script>
