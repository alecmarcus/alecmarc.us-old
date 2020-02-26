<template>
  <section id="activeProject">
    <article class="description">
      <div class="header-wrapper">
        <h1>{{ activeProject.name }}</h1>
        <p class="subhead">
          <span>
            <span class="label">&mdash; {{ projectArray.indexOf(activeProjectId) + 1 }} of {{ projectArray.length }}</span>
            <nuxt-link :to="`/projects/${prevProjectId}`">Previous</nuxt-link>,
            <nuxt-link :to="`/projects/${nextProjectId}`">Next</nuxt-link>,
            <nuxt-link to="/projects">Index</nuxt-link>
          </span>
          <span>{{ activeProject.time }}</span>
        </p>
      </div>
      <div class="details">
        <p v-if="activeProject.role"><span class="label">Role:</span> {{ activeProject.role }}</p>
        <p v-if="activeProject.client"><span class="label">Client:</span> {{ activeProject.client }}</p>
        <p v-if="activeProject.media"><span class="label">Media:</span> {{ activeProject.media }}</p>
        <p v-if="activeProject.technologies"><span class="label">Tech:</span> {{ activeProject.technologies }}</p>
        <p v-if="activeProject.scope"><span class="label">Scope:</span> {{ activeProject.scope }}</p>
      </div>
      <p><span class="label">Brief:</span> {{ activeProject.brief }}</p>
    </article>
    <article v-if="activeProject.vids">
      <v-project-video
        v-for="vid in activeProject.vids"
        :key="vid"
        :file-name="vid"
        :project-id="activeProject.id"
        :project-name="activeProject.name"
      />
    </article>
    <article>
      <v-project-image
        v-for="img in activeProject.imgs"
        :key="img.fileName"
        :file-name="img.fileName"
        :width="img.width"
        :project-id="activeProject.id"
        :project-name="activeProject.name"
        :image-caption="img.caption"
      />
    </article>
    <v-project-nav />
  </section>
</template>

<script>
import VProjectNav from '~/components/VProjectNav.vue'
import VProjectImage from '~/components/VProjectImage.vue'
import VProjectVideo from '~/components/VProjectVideo.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import projects from '~/assets/projects.json'

export default {
  transition(to, from) {
    if (!from) {
      // Prevent the page from hanging if user navigates directly to a project page (no 'from').
      return false
    } else if (to.path === '/projects' || from.path === '/projects') {
      return {
        name: 'slide',
        mode: ''
      }
    } else {
      return 'fade'
    }
  },
  components: {
    VProjectNav,
    VProjectImage,
    VProjectVideo
  },
  validate({ params }) {
    return isNaN(+params.id)
  },
  asyncData({ params, store, error }) {
    const project = params.id
    if (!project) {
      return error({
        message: 'Project not found.',
        statusCode: 404
      })
    }
    return project
  },
  head() {
    return {
      title: this.name
    }
  },
  data: () => ({
    projects
  }),
  computed: {
    ...mapState({
      activeProject: state => state.projectView.activeProject,
      activeProjectId: state => state.projectView.activeProjectId,
      projectArray: state => state.projectView.projectArray
    }),
    ...mapGetters({
      nextProjectId: 'projectView/nextProjectId',
      prevProjectId: 'projectView/prevProjectId'
    })
  },
  created() {
    this.setActiveProject(this.$route.params.id)
  },
  methods: {
    ...mapActions({ setActiveProject: 'projectView/setActiveProject' })
  }
}
</script>

<style lang="scss" scoped>
.description {
  font-size: ms(0);
  margin: ms(6) auto ms(0);
  max-width: ms(17);
  padding: 0 ms(1);

  @media (min-width: #{$bp-md}) {
    font-size: ms(1);
  }

  + article {
    margin-top: ms(6);
  }
}

.details p {
  margin-bottom: ms(2);
}

h1 {
  font-size: ms(5);
  margin-bottom: ms(-2);
  line-height: 1;

  @media (min-width: #{$bp-sm}) {
    font-size: ms(6);
  }

  @media (min-width: #{$bp-md-sm}) {
    font-size: ms(7);
  }
}

.subhead {
  display: flex;
  justify-content: space-between;
}

.label {
  float: left;
  margin-bottom: 1em;
  width: ms(8);
}

p,
h2,
h3 {
  margin: 0;
}

video {
  display: block;
  max-width: 100vw;
  margin: 0 auto ms(8);
}

section {
  margin-bottom: calc(var(--nav-height) + 1.25rem);
}

@media (max-width: 450px) {
  section {
    margin-bottom: calc(1.7 * var(--nav-height));
  }
}
</style>
