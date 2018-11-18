<template>
  <nav id="primaryNav">
    <div v-if="activeProject && this.$route.params.id">
      <h1>{{ activeProject.name }} <span v-html="activeProject.time" /></h1>
      <nuxt-link
        to="/projects"
        class="back">Return to Index</nuxt-link>
    </div>
    <div v-if="this.$route.path === '/projects'">
      <h1>Index of Projects</h1>
      <nuxt-link
        to="/"
        class="back">Return Home</nuxt-link>
    </div>
    <div v-if="this.$route.path === '/'">
      <h1>
        <nuxt-link
          to="/projects"
          class="forward">Index of Projects</nuxt-link>
      </h1>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>

<style scoped>
nav {
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: #8e8e8e;
  position: sticky;
  top: 0;
  background: #ffffff;
  transition: all 0.3s ease;
}

.expanded nav {
  border-color: #2e2e2e;
}

nav div {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
}

h1 {
  margin: 0;
}

.forward:after {
  content: '→';
  padding-left: 0.3em;
  transform: translateX(0.3em);
}

.back:before {
  content: '← ';
  padding-right: 0.3em;
  transform: translateX(-0.3em);
}

.forward:after,
.back:before {
  display: inline-block;
  color: #2e2e2e;
  opacity: 0;
  transition: all 0.15s ease;
}

.forward:hover:after,
.back:hover:before {
  opacity: 1;
  transform: translateX(0);
}
</style>
