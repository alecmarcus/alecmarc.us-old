<template>
  <div :class="['outer-wrapper', width, imageCaption && 'has-caption']">
    <div class="image-fit-wrapper">
      <img
        :src="imagePath"
        :alt="projectName">
    </div>
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


<style lang="scss" scoped>
div {
  display: inline-block;
  text-align: center;

  &.centered {
    margin-left: auto;
    margin-right: auto;
  }

  &.outer-wrapper {
    margin-bottom: calc(var(--font-size) * #{ms($steps: 3, $base: 1)});
    vertical-align: top;
    max-width: 100%;
  }
}

div,
img,
p {
  user-select: none;
}

p {
  box-sizing: border-box;
  font-size: ms(1);
  margin: 0 auto;
  max-width: 30em;
  padding: 0 ms(0) ms(3);
  width: 100%;
}

.image-fit-wrapper {
  width: 100%;
}

img {
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  pointer-events: none;
  width: 100%;
}

.contain img {
  object-fit: contain;
}

.third {
  width: 33.33%;

  .image-fit-wrapper {
    height: 75vh;
  }
}

.two-thirds {
  width: 66.66%;

  .image-fit-wrapper {
    height: 75vh;
  }
}

.half {
  width: 50%;

  .image-fit-wrapper {
    height: 75vh;
  }
}

.full {
  width: 100%;
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
