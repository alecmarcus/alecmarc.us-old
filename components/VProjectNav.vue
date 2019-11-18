<template>
  <nav>
    <span>{{ projectArray.indexOf(activeProjectId) + 1 }} / {{ projectArray.length }}</span>
    <span>
      <nuxt-link
        :to="'/projects/'+prevProjectId"
        class="previous">Previous</nuxt-link> •
      <nuxt-link
        :to="'/projects/'+nextProjectId"
        class="next">Next</nuxt-link>
    </span>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      activeProject: state => state.projectView.activeProject,
      activeProjectId: state => state.projectView.activeProjectId,
      projectArray: state => state.projectView.projectArray
    }),
    ...mapGetters({
      nextProjectId: 'projectView/nextProjectId',
      prevProjectId: 'projectView/prevProjectId'
    })
  }
}
</script>

<style lang="scss" scoped>
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
  transition: all 0.15s $ease-in-out-circ;
}

.next:hover:after,
.previous:hover:before {
  opacity: 1;
  transform: translateX(0);
}
</style>
