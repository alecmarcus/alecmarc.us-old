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
#primaryNav {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: calc(100vh - 105px);
  background: #ffffff;
}

#primaryNav.projects {
  top: 0;
}
</style>
