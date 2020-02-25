<template>
  <main>
    <v-primary-nav
      ref="nav"
      :class="{
        projects: this.$route.path === '/projects',
        'project-view': activeProject
      }"
    />
    <nuxt/>
  </main>
</template>

<script>
import VPrimaryNav from '~/components/VPrimaryNav.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    VPrimaryNav
  },
  computed: {
    ...mapState({
      activeProject: state => state.projectView.activeProject
    })
  },
  watch: {
    $route(to, from) {
      this.setActiveProject(to.params.id)
    },
    activeProject(val, oldVal) {
      if (val && !oldVal) {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
      } else if (!val) {
        if (this.$refs.nav) {
          this.$refs.nav.$el.classList.remove('scrolling')
          this.$refs.nav.$el.style.bottom = 0
        }
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  },
  mounted() {
    this.activeProject && this.handleScroll()
  },
  destroyed() {
    if (this.activeProject) {
      this.$refs.nav.$el.classList.remove('scrolling')
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    ...mapActions({ setActiveProject: 'projectView/setActiveProject' }),
    handleScroll() {
      const offset = Math.min(-1 * (150 - window.scrollY), 0)
      if (this.$refs.nav) {
        this.$refs.nav.$el.classList.add('scrolling')
        window.requestAnimationFrame(() => {
          this.$refs.nav.$el.style.bottom = `${offset}px`
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  --font-size: #{ms(3)};
  --leading: #{ms($steps: 1, $base: 1)};
  --nav-height: calc((var(--font-size) * var(--leading)) + (2 * 1.25rem));
  --nav-offset-height: calc(var(--nav-height) + 4px);

  line-height: var(--leading);
  font-size: var(--font-size);
}

@media (min-width: 900px) {
  main {
    --font-size: #{ms(4)};
  }
}

@media (min-width: 1200px) {
  main {
    --font-size: #{ms(5)};
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
  transition-property: min-height, bottom;
  transition-duration: 0.5s;
  transition-timing-function: $ease-in-out-circ;
  font-size: calc(var(--font-size) / 1.25);

  &.projects {
    min-height: 100vh;
  }

  &.scrolling {
    transition-property: min-height;
  }
}
</style>
