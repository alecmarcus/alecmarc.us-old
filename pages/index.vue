<template>
  <div>
    <section id="about">
      <v-about-section />
    </section>
    <section
      id="projects"
      :class="{expanded: this.$route.path === '/projects' || this.$route.params.id}">
      <v-project-nav />
      <nuxt-child />
    </section>
  </div>
</template>

<script>
import VAboutSection from '~/components/VAboutSection.vue'
import VProjectNav from '~/components/VProjectNav.vue'
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  components: {
    VAboutSection,
    VProjectNav
  },
  data: () => ({
    projects
  }),
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>

<style>
#projects {
  position: fixed;
  width: 100vw;
  bottom: 0;
  background: #ffffff;
  max-height: 100vh;
  overflow-y: scroll;
}

#projects.collapsed {
  top: 0;
}
</style>
