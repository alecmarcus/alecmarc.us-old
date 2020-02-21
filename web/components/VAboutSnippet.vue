<template>
  <nuxt-link
    :to="'/projects/' + project"
    :class="project"
    @mouseover="$emit('showOptions', project)"
    ><slot
  /></nuxt-link>
</template>

<script>
export default {
  props: {
    project: { type: String, required: true }
  }
}
</script>
