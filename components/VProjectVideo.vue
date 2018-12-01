<template>
  <video
    autoplay
    muted
    loop >
    <source :src="videoPath">
  </video>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    fileName: { type: String, required: true }
  },
  computed: {
    videoPath: function() {
      return require('~/assets/img/' + this.projectId + '/' + this.fileName)
    }
  }
}
</script>
