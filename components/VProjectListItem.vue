<template>
  <li class="project-link">
    <nuxt-link :to="'/projects/' + projectId">
      <span v-html="projectYear" /> &mdash;
      <span v-html="projectName" />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    projectYear: { type: String, required: true }
  }
}
</script>

<style scoped>
a:after {
  content: '→';
  padding-left: 0.3em;
  transform: translateX(0.3em);
}

a:after {
  display: inline-block;
  color: #2e2e2e;
  opacity: 0;
  transition: all 0.15s ease;
}

a:hover:after {
  opacity: 1;
  transform: translateX(0);
}
</style>
