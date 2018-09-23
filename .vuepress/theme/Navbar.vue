<template>
  <header class="navbar">
    <!-- <nav class="navbar navbar-expand-lg navbar-light fixed-top"> -->
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </router-link>

    <div
      class="links"
      :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }"
    >
      <NavLinks class="can-hide"/>

      <span class="stars"><a class="github-button" href="https://github.com/strongloop/loopback-next" data-icon="octicon-star" data-show-count="true" aria-label="Star strongloop/loopback-next on GitHub">Star</a></span>
    </div>
    <!-- </nav> -->
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {}
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}

// Load GitHub Button Script
(function() {
  var sc = document.createElement("script");
  sc.src = "https://buttons.github.io/buttons.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(sc, s);
})();
</script>

<style lang="stylus">
@import './styles/config.styl'

$navbar-vertical-padding = 0.5rem
$navbar-horizontal-padding = 1rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  border-bottom solid 1px $gray
  position relative
  .stars
    margin-top -2px
    margin-left 1.5rem
  .home-link
    margin-left 1rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 1rem
    font-weight 400
    color rgba(0,0,0,.5)
    position absolute
    right $navbar-horizontal-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
    .nav-links
      flex 1
      padding-top $navbar-vertical-padding
      .nav-link
        padding 0.5rem
      .nav-link:hover, .nav-link:active, .nav-link:focus
        color $blue
        margin-bottom initial
        border-bottom none
      .nav-link.external svg
        display none

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .home-link
      margin-left 3rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
