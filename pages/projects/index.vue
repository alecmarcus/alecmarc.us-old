<template>
  <section id="allProjects">
    <ul>
      <v-project-list-item
        v-for="project in projects"
        :key="project.id"
        :project-name="project.name"
        :project-year="project.time"
        :project-id="project.id" />
    </ul>
    <h2>See Also:</h2>
    <p>
      <a
        href="https://hashed.com"
        target="_blank"><span class="inline-name"><img :src="hashed">Hashed:</span> A South Korean crypto&shy;currency VC empowering companies to rethink money. <img
          :src="externalLinkIcon"
          class="ext"></a>
      <a
        href="https://typelist.upstatement.com"
        target="_blank"><span class="inline-name"><img :src="typelist">Typelist:</span> Explore, discover, and get inspired by curated typeface collections. <img
          :src="externalLinkIcon"
          class="ext"></a>
      <a
        href="https://library.upstatement.com"
        target="_blank"><span class="inline-name"><img :src="upl">Upstatement Public Library:</span> A catalog of lessons and references on learning to write production code for the web. <img
          :src="externalLinkIcon"
          class="ext"></a>
      <a
        href="https://cfs.energy"
        target="_blank"><span class="inline-name"><img :src="cfs">Commonwealth Fusion Systems:</span> An energy startup from MIT harnessing the power of the stars. <img
          :src="externalLinkIcon"
          class="ext"></a>
    </p>
  </section>
</template>

<script>
import VProjectListItem from '~/components/VProjectListItem.vue'
import { mapState } from 'vuex'
import projects from '~/assets/projects.json'
import externalLinkIcon from '~/assets/icons/external-link-icon.svg'
import hashed from '~/assets/img/hashed.png'
import typelist from '~/assets/img/typelist.svg'
import upl from '~/assets/img/upl.svg'
import cfs from '~/assets/img/cfs.svg'

export default {
  transition: {
    name: 'slide',
    mode: ''
  },
  components: {
    VProjectListItem
  },
  data: () => ({
    projects,
    externalLinkIcon,
    hashed,
    typelist,
    upl,
    cfs
  }),
  computed: mapState({
    activeProject: state => state.projectView.activeProject
  })
}
</script>

<style lang="scss" scoped>
section {
  margin: var(--nav-offset-height) 0 0;
  max-height: calc(100vh - var(--nav-offset-height));
  overflow-y: scroll;
  padding: 0 ms(1);
  position: relative;
  z-index: 2;
}

ul {
  padding-bottom: ms(7);
  padding-right: 1.25rem;
  padding-top: 1.25rem;
  position: relative;
}

h2,
p {
  margin: 0;
  font-size: ms(1);

  @media (min-width: #{$bp-md}) {
    font-size: ms(2);
  }
}

h2 {
  float: left;
  margin-bottom: 1em;
  margin-right: ms(2, 1em);
}

p {
  max-width: 27em;
}

a {
  hyphens: auto;

  @media (min-width: #{$bp-md-sm}) {
    hyphens: manual;
  }

  &:hover,
  &:focus {
    img {
      opacity: 1;
    }
  }

  img {
    transition: opacity $transition-default;
    display: inline-block;
    height: ms(-1, 1em);
    opacity: 0.4;
    padding-right: ms(-6, 1em);
    transform: translateY(1px);

    &.ext {
      padding-right: ms(-2, 1em);
    }
  }
}
</style>
