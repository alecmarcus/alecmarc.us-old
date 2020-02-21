<template>
  <div>
    <p>
      Alec Marcus is a
      <VAboutSnippet project="groove"> communication designer </VAboutSnippet>,
      <VAboutSnippet project="cor2e-symposium"> graphic designer </VAboutSnippet
      >, <VAboutSnippet project="lincus"> web designer </VAboutSnippet>,
      <VAboutSnippet project="slabs"> web developer </VAboutSnippet>, and
      <VAboutSnippet project="mod-table">
        maker
      </VAboutSnippet>
      interested in
      <VAboutSnippet project="hyperreal"> media studies </VAboutSnippet>,
      <VAboutSnippet project="instaface">
        ethical [digital] product design </VAboutSnippet
      >, new &amp; experimental technologies, and
      <VAboutSnippet project="ose">
        an open source future
      </VAboutSnippet>
      trying to always be learning,
      <VAboutSnippet project="instaface">
        subvert questionable relationships with technology </VAboutSnippet
      >, collaborate,
      <VAboutSnippet project="lincus">
        promote intellectual pursuit </VAboutSnippet
      >, and
      <VAboutSnippet project="mod-table"> modularize everything </VAboutSnippet
      >.
    </p>
    <p>
      He can be reached by <a href="tel:+18603083030">phone</a> or
      <a href="mailto:hi@alecmarc.us">electronic mail</a>.
    </p>
    <p>
      He designed and developed this website, which is open source. As such, he
      invites fellow creatives to
      <a href="https://github.com/alecmarcus/alecmarc.us" target="_blank"
        >fork it on GitHub</a
      >, make it their own, and use it to display their work.
    </p>
    <p>
      He thanks
      <a href="https://colophon-foundry.org" target="_blank"
        >Colophon Foundry</a
      >
      for their work on the typeface
      <a
        href="https://www.colophon-foundry.org/typefaces/basis-grotesque/"
        target="_blank"
        >Basis Grotesque</a
      >, in which this website is set.
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

.focus {
  color: inherit;
}
</style>
