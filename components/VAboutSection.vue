<template>
  <div>
    <p>
      Alec Marcus is a <v-about-snippet project="groove">communication designer</v-about-snippet>, <v-about-snippet project="cor2e-symposium">graphic designer</v-about-snippet>, <v-about-snippet project="lincus">web designer</v-about-snippet>, <v-about-snippet project="slabs">web developer</v-about-snippet>, and <v-about-snippet project="mod-table">maker</v-about-snippet> intested in <v-about-snippet project="hyperreal">media studies</v-about-snippet>, <v-about-snippet project="instaface">ethical [digital] product design</v-about-snippet>, new &amp; experimental technologies, and <v-about-snippet project="ose">an open source future</v-about-snippet> trying to always be learning, <v-about-snippet project="instaface">subvert questionable realtionships with technology</v-about-snippet>, collaborate, <v-about-snippet project="lincus">promote intellectual pursuit</v-about-snippet>, and <v-about-snippet project="mod-table">modularize everything</v-about-snippet>.
    </p>
    <p>
      He can be reached by <a href="tel:+18603083030">phone</a> or <a href="mailto:hi@alecmarc.us">electronic mail</a>.
    </p>
    <p>
      He designed and developed this website, which is open source. As such, he invites fellow creatives to <a
        href="https://github.com/alecmarcus/alecmarc.us"
        target="blank_">fork it on GitHub</a>, make it their own, and use it to display their work.
    </p>
    <p>
      He thanks <a
        href="https://colophon-foundry.org"
        target="blank_">Colophon Foundry</a> for their work on the typeface <a
          href="https://www.colophon-foundry.org/typefaces/basis-grotesque/"
          target="blank_">Basis Grotesque</a>, in which this website is set.
    </p>
  </div>
</template>

<script>
import VAboutSnippet from '~/components/VAboutSnippet.vue'

export default {
  components: {
    VAboutSnippet
  },
  methods: {
    showOptions: function(project) {
      console.log(this.$refs)
    }
  }
}
</script>

<style scoped>
div {
  margin: 1.25rem;
  padding-bottom: calc(63rem / 16);
}

.focus {
  color: inherit;
}
</style>
