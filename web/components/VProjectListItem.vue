<template>
  <li class="project-link">
    <nuxt-link :to="'/projects/' + projectId">
      <!-- eslint-disable-next-line vue/no-v-html -->
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

<style lang="scss" scoped>
a {
  @media (min-width: #{$bp-md-sm}) {
    &:after {
      content: '→';
      padding-left: 0.3em;
      transform: translateX(0.3em);
      color: #2e2e2e;
      display: inline-block;
      opacity: 0;
      transition: all 0.15s $ease-in-out-circ;
    }
  }
}

a:hover:after {
  opacity: 1;
  transform: translateX(0);
}
</style>
