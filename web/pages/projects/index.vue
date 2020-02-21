<template>
  <section id="allProjects">
    <ul>
      <VProjectListItem
        v-for="project in projects"
        :key="project.id"
        :project-name="project.name"
        :project-year="project.time"
        :project-id="project.id"
      />
    </ul>
  </section>
</template>

<script>
import VProjectListItem from '~/components/VProjectListItem.vue'
import { mapState } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  transition: {
    name: 'slide',
    mode: ''
  },
  components: {
    VProjectListItem
  },
  data: () => ({
    projects
  }),
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>

<style lang="scss" scoped>
section {
  z-index: 2;
  position: relative;
}

ul {
  margin: var(--nav-offset-height) 0 0 1.25rem;
  padding-top: 1.25rem;
  padding-right: 1.25rem;
  overflow-y: scroll;
  max-height: calc(100vh - (var(--nav-offset-height) + 1.25rem));
  position: relative;
}
</style>
