<template>
  <main>
    <v-primary-nav :class="{projects: this.$route.path === '/projects'}"/>
    <nuxt/>
  </main>
</template>

<script>
import VPrimaryNav from '~/components/VPrimaryNav.vue'

export default {
  components: {
    VPrimaryNav
  }
}
</script>

<style scoped>
main {
  --font-size: calc(49rem / 16);
  --leading: 1.25;
  --nav-height: calc((var(--font-size) * var(--leading)) + (2 * 1.25rem) + 4px);
  line-height: var(--leading);
  font-size: var(--font-size);
}

@media (max-width: 900px) {
  main {
    --font-size: calc(39rem / 16);
  }
}

@media (max-width: 700px) {
  main {
    --font-size: calc(31rem / 16);
  }
}

@media (max-width: 450px) {
  main {
    --font-size: calc(25rem / 16);
  }
}

#primaryNav {
  position: fixed;
  width: 100vw;
  min-height: var(--font-size);
  max-height: 100vh;
  bottom: 0;
  background: #ffffff;
}

#primaryNav.projects {
  min-height: 100vh;
}
</style>
