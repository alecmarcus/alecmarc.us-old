<template>
  <div>
    <p>
      Alec Marcus is a <v-about-snippet project="groove">communication designer</v-about-snippet>, <v-about-snippet project="cor2e-symposium">graphic designer</v-about-snippet>, <v-about-snippet project="lincus">web designer / developer</v-about-snippet>, and maker interested in <v-about-snippet project="hyperreal">media studies</v-about-snippet>, ethical [digital] product design, new & experimental technologies, and <v-about-snippet project="ose">an open source future</v-about-snippet>.
    </p>
    <p>
      He strives to always be learning, subvert questionable relationships with technology, <v-about-snippet project="lincus">promote intellectual pursuit</v-about-snippet>, and modularize everything.
    </p>
    <p>
      He can be reached by <a href="tel:+18603083030">phone</a> or <a href="mailto:hi@alecmarc.us">electronic mail</a>.
    </p>
    <p>
      He designed and developed this website, which is open source. As such, he invites fellow creatives to <a
        href="https://github.com/alecmarcus/alecmarc.us"
        target="_blank">fork it on GitHub</a>, make it their own, and use it to display their work.
    </p>
    <p>
      He thanks <a
        href="https://colophon-foundry.org"
        target="_blank">Colophon Foundry</a> for their work on the typeface <a
          href="https://www.colophon-foundry.org/typefaces/basis-grotesque/"
          target="_blank">Basis Grotesque</a>, in which this website is set.
    </p>
  </div>
</template>

<script>
import VAboutSnippet from '~/components/VAboutSnippet.vue'

export default {
  components: {
    VAboutSnippet
  }
}
</script>

<style scoped>
div {
  margin: 1.25rem;
  padding-bottom: calc(63rem / 16);
}
</style>
