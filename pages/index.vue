<template>
  <section id="about">
    <v-about-section />
  </section>
</template>

<script>
import VAboutSection from '~/components/VAboutSection.vue'
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  transition(to, from) {
    if (!from) {
      // Prevent the page from hanging if user navigates directly to a project page (no 'from').
      return false
    } else if (to.path === '/projects' || from.path === '/projects') {
      return {
        name: 'slide',
        mode: ''
      }
    } else {
      return 'fade'
    }
  },
  components: {
    VAboutSection
  },
  data: () => ({
    projects
  }),
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>
