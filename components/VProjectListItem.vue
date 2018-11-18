<template>
  <li class="project-link">
    <nuxt-link :to="'/projects/' + projectId">
      <span>{{ projectName }} &mdash; </span>
      <span>{{ projectYear }}</span>
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
