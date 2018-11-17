<template>
  <div>
    <section id="about">
      <v-about-section />
    </section>
    <section id="projects">
      <div class="off-2 off-md-1 off-sm-0">
        <nav id="projectsNav">
          <h1>
            <span>Projects </span>
            <nuxt-link
              v-if="activeProject && this.$route.params.id"
              to="/"><span class="return-arrow">&rarr;</span> {{ activeProject.name }}</nuxt-link>
          </h1>
        </nav>
      </div>
      <nuxt-child />
    </section>
  </div>
</template>

<script>
import VAboutSection from '~/components/VAboutSection.vue'
import { mapState } from 'vuex'
import projects from '~/assets/projects.json'

export default {
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

<style>
</style>
