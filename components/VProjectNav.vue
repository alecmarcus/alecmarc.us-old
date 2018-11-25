<template>
  <nav v-if="prevProjId && nextProjId">
    <span>{{ projectArray.indexOf(activeProjectId) + 1 }} / {{ projectArray.length }}</span>
    <span>
      <nuxt-link
        :to="'/projects/'+prevProjId"
        class="previous"
        @click="setActiveProject(prevProjId)">Previous</nuxt-link> •
      <nuxt-link
        :to="'/projects/'+nextProjId"
        class="next"
        @click="setActiveProject(nextProjId)">Next</nuxt-link>
    </span>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import projects from '~/assets/projects.json'

export default {
  data: () => ({
    projects,
    prevProjId: null,
    nextProjId: null
  }),
  computed: {
    ...mapState({
      projects: state => state.projectView.projects,
      activeProject: state => state.projectView.activeProject,
      activeProjectId: state => state.projectView.activeProjectId,
      projectArray: state => state.projectView.projectArray
    })
  },
  mounted() {
    this.updateNavLinks()
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
    },
    updateNavLinks: function() {
      let activeProjectIndex = this.projectArray.indexOf(this.activeProjectId)
      this.prevProjId = this.projectArray[
        this.getPrevProjectId(activeProjectIndex)
      ]
      this.nextProjId = this.projectArray[
        this.getNextProjectId(activeProjectIndex)
      ]
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 1.25rem;
}

.next:after {
  content: '→';
  padding-left: 0.3em;
  transform: translateX(0.3em);
}

.previous:before {
  content: '←';
  padding-right: 0.3em;
  transform: translateX(-0.3em);
}

.next:after,
.previous:before {
  display: inline-block;
  color: #2e2e2e;
  opacity: 0;
  transition: all 0.15s ease;
}

.next:hover:after,
.previous:hover:before {
  opacity: 1;
  transform: translateX(0);
}
</style>
