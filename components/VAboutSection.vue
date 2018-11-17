<template>
  <div class="about-grid off-2 off-md-1 off-sm-0 col-8 col-md-7 col-sm-4 ">
    <nav
      id="aboutNav"
      ref="aboutNav">
      <h1 onclick="this.scrollIntoView({behavior: 'smooth', block: 'end'})">About</h1>
    </nav>
    <div class="whoami">
      <p>
        <span class="my-name">Alec Marcus</span> &mdash; Designer + Maker + Developer
      </p>
      <p>
        Exploring the interface of physical and virtual realities and disrupting relationships between the two. Asking questions,
        starting conversations, experimenting.
      </p>
    </div>

    <p class="heading">Education</p>
    <div class="p-wrap">
      <p>
        University of Connecticut, BFA Graphic Design <strong>2018</strong>
      </p>
      <p>
        UAL: Central Saint Martins, Design &amp; Interaction <strong>Spring 2017</strong>
      </p>
    </div>
    <p class="heading">Work</p>
    <div class="p-wrap">
      <p>
        Chief Design Officer at
        <a
          href="https://linc.us"
          target="_blank">
          lincus</a>
        <strong>2018 &rarr; present</strong>
      </p>
      <p>
        Design Lead at
        <a
          href="https://squaredlabs.uconn.edu"
          target="_blank">
          [squared labs]</a> <strong>2017 &rarr; present</strong>
      </p>
      <p>
        Designer at University of Connecticut Design Center Studio <strong>2016, 2018</strong>
      </p>
      <p>
        Designer at the Connecticut Transportation Institute <strong>2015 &rarr; 2017</strong>
      </p>
    </div>

    <p class="heading">Location</p>
    <p>
      New England US / London UK
    </p>

    <p class="heading">Connect</p>
    <p>
      <a href="mailto:nicewebsite@alecmarc.us">Email,</a>
      <a
        href="https://instagram.com/_alecmarcus"
        target="_blank">Instagram,</a>
      <a
        href="https://github.com/alecmarcus"
        target="_blank">GitHub</a>,
      <a
        href="https://gitlab.com/alecmarcus"
        target="_blank">GitLab</a>
    </p>
    <p class="heading">Coffee?</p>
    <p>
      <a href="tel:+18603083030">Call me.</a>
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
