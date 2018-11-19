<template>
  <div
    :class="width"
    @click="focus($event)">
    <img
      :src="'/img/'+projectId+'/'+fileName"
      :alt="projectName">
  </div>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    fileName: { type: String, required: true },
    width: { type: String, required: true }
  },
  methods: {
    focus: function($event) {
      if ($event.target.classList.contains('focused')) {
        $event.target.classList.remove('focused')
      } else {
        $event.target.classList.add('focused')
      }
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
  margin: calc(49rem / 16) auto;
  cursor: url('/img/plus.svg'), pointer;
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

div.focused {
  width: 100vw;
  height: 90vh;
  cursor: url('/img/minus.svg'), pointer;
}

div.focused img {
  object-fit: contain;
  width: 100%;
  height: 100%;
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
