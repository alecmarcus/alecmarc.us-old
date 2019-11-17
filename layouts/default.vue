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

<style lang="scss" scoped>
main {
  --font-size: #{ms(5)};
  --leading: #{ms($steps: 1, $base: 1)};
  --nav-height: calc((var(--font-size) * var(--leading)) + (2 * 1.25rem) + 4px);

  line-height: var(--leading);
  font-size: var(--font-size);
}

@media (max-width: 900px) {
  main {
    --font-size: #{ms(4)};
  }
}

@media (max-width: 700px) {
  main {
    --font-size: #{ms(3)};
  }
}

@media (max-width: 450px) {
  main {
    --font-size: #{ms(2)};
  }
}

#primaryNav {
  position: fixed;
  width: 100vw;
  min-height: var(--font-size);
  max-height: 100vh;
  bottom: 0;
  background: #ffffff;
  z-index: 1;
}

#primaryNav.projects {
  min-height: 100vh;
}
</style>
