<template>
  <nav id="primaryNav">
    <div v-if="activeProject && this.$route.params.id">
      <h1 v-html="activeProject.name" />
      <nuxt-link
        to="/projects"
        class="going-up">Index</nuxt-link>
    </div>
    <div v-if="this.$route.path === '/projects'">
      <h1>Index of Projects</h1>
      <nuxt-link
        to="/"
        class="going-down">Home</nuxt-link>
    </div>
    <div v-if="this.$route.path === '/'">
      <h1>
        <nuxt-link
          to="/projects"
          class="going-up">Index of Projects</nuxt-link>
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
nav,
div {
  transition: all 0.5s ease;
}

div {
  transition-delay: 0.3s;
}

nav div {
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-color: #8e8e8e;
  background: #ffffff;
}

nav.projects div {
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

.going-up:after {
  content: '↑';
  padding-left: 0.3em;
  transform: translateY(0.3em);
}

.going-down:before {
  content: '↓';
  padding-right: 0.3em;
  transform: translateY(-0.3em);
}

.going-up:after,
.going-down:before {
  display: inline-block;
  color: #2e2e2e;
  opacity: 0;
  transition: all 0.15s ease;
}

.going-up:hover:after,
.going-down:hover:before {
  opacity: 1;
  transform: translateX(0);
}
</style>
