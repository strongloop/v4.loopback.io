<template>
    <footer class="footer">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-3">
                    <img :src="$withBase('/global/loopback-mark-frame-white.svg')" alt="LoopBack Logo" width="40px">
                </div>

                <div class="col-md-3">
                    <p class="label text-uppercase">Product</p>
                    <p><NavLink :item="{link: 'https://loopback.io/doc/en/lb4/Getting-started.html', text: 'Getting Started'}" /></p>
                    <p><NavLink :item="{link: 'https://loopback.io/doc/en/lb4/Examples-and-tutorials.html', text: 'Tutorials'}" /></p>
                    <p><NavLink :item="{link: 'https://www.ibm.com/marketplace/api-management', text: 'API Connect'}" /></p>
                </div>

                <div class="col-md-3">
                    <p class="label text-uppercase">Documentation</p>
                    <p><NavLink :item="{link: 'https://loopback.io/doc/en/lb4/', text: 'Docs'}" /></p>
                    <p><NavLink :item="{link: 'http://apidocs.loopback.io/@loopback%2fdocs/apidocs.html', text: 'API Docs'}" /></p>
                    <p><NavLink :item="{link: 'https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md', text: 'Contribute'}" /></p>
                </div>

                <div class="col-md-3">
                    <p class="label text-uppercase">Support</p>
                    <p><NavLink :item="{link: 'https://github.com/strongloop/loopback-next/issues', text: 'GitHub Issues'}" /></p>
                    <p><NavLink :item="{link: 'https://developer.ibm.com/node/support/', text: 'IBM Support'}" /></p>
                    <p><NavLink :item="{link: 'https://strongloop.com/strongblog/', text: 'StrongLoop Blog'}" /></p>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col-md-6">
                    <p class="copyright float-left">Copyright {{year}} StrongLoop, an IBM company</p>
                </div>

                <div class="col-md-6">
                    <p class="twitter float-right">
                        <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Creating APIs has never been easier using %23LoopBack 4 by %40StrongLoop. Check it out at v4.loopback.io.&url=v4.loopback.io">Tweet</a>
                        <a class="twitter-follow-button" href="https://twitter.com/intent/tweet?screen_name=StrongLoop&ref_src=twsrc%5Etfw" data-show-count="true">Tweet to @StrongLoop</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
    components: { NavLink },

    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
</script>

<style lang="stylus">
@import './styles/config.styl'

.footer
  padding 25px 0
  text-align center
  background-color $bgGray

  hr
    background-color $gray

  .nav-link
    color $white
    padding 0px
    display initial

  .label
    color $gray
    font-size 1rem

  .copyright
    margin-top -2px

  p, a
    color $white
    font-size 0.875rem
    line-height 1.5rem
    text-align left

  a
    margin-bottom 1rem

    svg.icon.outbound
      display none
  
  a:hover, a:focus, a:active
    color $gray
    text-decoration none
</style>
