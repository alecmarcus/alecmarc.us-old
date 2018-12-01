<template>
  <div>
    <ul>
      <v-project-list-item
        v-for="project in projects"
        :key="project.id"
        :project-name="project.name"
        :project-year="project.time"
        :project-id="project.id" />
    </ul>
  </div>
</template>

<script>
import VProjectListItem from '~/components/VProjectListItem.vue'
import { mapState } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  transition: 'slide',
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

<style scoped>
div {
  z-index: 2;
  position: relative;
}

ul {
  margin: var(--nav-height) 0 0 1.25rem;
  padding-top: 1.25rem;
  padding-right: 1.25rem;
  overflow-y: scroll;
  max-height: calc(100vh - (var(--nav-height) + 1.25rem));
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100vh);
}

.slide-leave,
.slide-enter-to {
  transform: translateY(0);
}
</style>
