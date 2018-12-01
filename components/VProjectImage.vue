<template>
  <div :class="width">
    <img
      :src="imagePath"
      :alt="projectName">
    <p v-if="imageCaption">
      {{ imageCaption }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    fileName: { type: String, required: true },
    width: { type: String, required: true },
    imageCaption: { type: String, default: null }
  },
  computed: {
    imagePath: function() {
      return require('~/assets/img/' + this.projectId + '/' + this.fileName)
    }
  }
}
</script>


<style scoped>
div {
  display: inline-block;
  text-align: center;
  max-width: 100vw;
  overflow: hidden;
  margin: 1.25rem auto calc(var(--font-size) * 1.25);
}

p {
  font-size: calc(var(--font-size) / 1.25 / 1.25 / 1.25 / 1.25);
  margin: 0 1em;
  text-align: left;
  position: absolute;
}

div,
img {
  transition: all 0.3s ease;
  user-select: none;
}

img {
  pointer-events: none;
  max-width: 100vw;
}

.third img,
.half img,
.two-thirds img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.contain img {
  object-fit: contain;
}

.third {
  width: 33.33%;
  height: 75vh;
}

.two-thirds {
  width: 66.66%;
  height: 75vh;
}

.half {
  width: 50%;
  height: 75vh;
}

.centered,
.full {
  display: block;
}

@media (max-width: 900px) {
  div.third,
  div.two-thirds {
    width: 50%;
  }
}

@media (max-width: 700px) {
  div.half,
  div.third,
  div.two-thirds {
    width: unset;
    height: unset;
    display: block;
  }
}
</style>
