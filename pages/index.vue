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
  transition: {
    name: 'slide',
    mode: ''
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
