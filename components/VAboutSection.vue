<template>
  <div>
    <p>
      Alec Marcus is a communication designer, graphic designer, web designer, web developer, and maker intested in media studies, ethical [digital] product design, new &amp; experimental technologies, and an open source future trying to always be learning, subvert questionable realtionships with technology, collaborate, promote intellectual pursuit, and modularize everything.
    </p>
    <p>
      He can be reached by phone or electronic mail.
    </p>
    <p>
      He designed and developed this website, which is open source. As such, he invites fellow creatives to fork it on GitHub, make it their own, and use it to display their work.
    </p>
    <p>
      He thanks Colophon Foundry for their work on the typeface Basis Grotesque, which this website is set in.
    </p>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener('scroll', this.moveAboutLink)
  },
  destroyed() {
    window.removeEventListener('scroll', this.moveAboutLink)
  },
  methods: {
    moveAboutLink() {
      if (window.innerHeight - window.scrollY < 200) {
        this.$refs.aboutNav.classList.add('scrolled')
      } else {
        this.$refs.aboutNav.classList.remove('scrolled')
      }
    }
  }
}
</script>

<style scoped>
div {
  padding-bottom: 93px;
}
</style>
