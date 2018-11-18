<template>
  <nav v-if="prevProjId && nextProjId">
    <nuxt-link
      :to="'/projects/'+prevProjId"
      @click="setActiveProject(prevProjId)">&larr; Previous</nuxt-link>
    <nuxt-link
      :to="'/projects/'+nextProjId"
      @click="setActiveProject(nextProjId)">&rarr; Next</nuxt-link>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  data: () => ({
    projects,
    prevProjId: null,
    nextProjId: null
  }),
  computed: {
    ...mapState({
      activeProject: state => state.projectView.activeProject,
      activeProjectId: state => state.projectView.activeProjectId,
      projectArray: state => state.projectView.projectArray
    })
  },
  watch: {
    activeProject: function() {
      let activeProjectIndex = this.projectArray.indexOf(this.activeProjectId)
      this.prevProjId = this.projectArray[
        this.getPrevProjectId(activeProjectIndex)
      ]
      this.nextProjId = this.projectArray[
        this.getNextProjectId(activeProjectIndex)
      ]
    }
  },
  methods: {
    ...mapActions({ setActiveProject: 'projectView/setActiveProject' }),
    getPrevProjectId: function(activeProjectIndex) {
      return activeProjectIndex - 1 >= 0
        ? activeProjectIndex - 1
        : this.projectArray.length - 1
    },
    getNextProjectId: function(activeProjectIndex) {
      return activeProjectIndex + 1 < this.projectArray.length
        ? activeProjectIndex + 1
        : 0
    }
  }
}
</script>

<style scoped>
</style>
