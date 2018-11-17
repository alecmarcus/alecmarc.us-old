<template>
  <li class="project-link">
    <nuxt-link :to="'/' + projectId">
      {{ projectName }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true }
  }
}
</script>
