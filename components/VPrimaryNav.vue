<template>
  <nav id="primaryNav">
    <div class="conditional-wrapper">
      <transition
        :enter-class="this.$route.path === '/projects' ? 'push-up-enter' : 'push-down-enter'"
        :leave-to-class="this.$route.path === '/projects' ? 'push-up-leave-to' : 'push-down-leave-to'"
        name="push"
      >
        <div
          v-if="activeProject && this.$route.params.id"
          key="active-proj"
          class="content-wrapper">
          <h1>{{ activeProject.name }}</h1>
          <nuxt-link
            to="/projects"
            class="going-up">Index</nuxt-link>
        </div>
        <div
          v-else
          key="no-active-proj"
          class="content-wrapper">
          <h1 v-if="this.$route.path === '/'">
            <nuxt-link
              to="/projects"
              class="going-up">Projects</nuxt-link>
          </h1>
          <template v-else>
            <h1>Projects</h1>
            <nuxt-link
              to="/"
              class="going-down">Home</nuxt-link>
          </template>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>

<style lang="scss" scoped>
nav {
  user-select: none;
}

.conditional-wrapper {
  background: #ffffff;
  border-bottom: 1px solid;
  border-color: #8e8e8e;
  border-top: 1px solid;
  height: var(--nav-height);
  overflow: hidden;
  position: relative;
  transition: border-color 0.3s $ease-in-out-circ 0.5s;
  width: 100%;
}

.content-wrapper {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-between;
  padding: 0 1.25rem;
  width: 100%;
}

.projects .conditional-wrapper {
  border-color: #2e2e2e;
}

h1 {
  margin: 0;
  margin-right: ms(-1);
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
  transition: all 0.15s $ease-in-out-circ;
}

.going-up:hover:after,
.going-down:hover:before,
.going-up:focus:after,
.going-down:focus:before {
  opacity: 1;
  transform: translateX(0);
}

.push-enter-active,
.push-leave-active {
  transition: all 0.8s $ease-in-out-circ;
  position: absolute;
}

.push-down-enter,
.push-up-leave-to {
  transform: translateY(calc(-1 * var(--nav-height)));
}

.push-down-leave-to,
.push-up-enter {
  transform: translateY(var(--nav-height));
}

.hide-leave-to {
  transition: none;
  opacity: 0;
}

.push-leave,
.push-enter-to {
  transform: translate(0);
}
</style>
