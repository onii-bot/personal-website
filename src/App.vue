<template>
<Navbar :getNavItems="getNavItems"/>
<Bio v-if="this.nav_items[0].isSelected" />
<Portofolio v-if="this.nav_items[1].isSelected" />
<Podcast v-if="this.nav_items[2].isSelected" />
<Blog v-if="this.nav_items[3].isSelected" />
<!-- <Bio v-if="true" />
<Portofolio v-if="false" />
<Podcast v-if="false" />
<Blog v-if="false" /> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";
import Portofolio from "./components/Portofolio.vue";
import Podcast from "./components/Podcast.vue";
import Blog from "./components/Blog.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Bio,
    Portofolio,
    Podcast,
    Blog

  },
  data() {
        return {
            nav_items: [{
                'title': 'BIO',
                'isSelected': true
            },
            {
                'title': 'PORTOFOLIO',
                'isSelected': false
            },
            {
                'title': 'PODCAST',
                'isSelected': false
            },
            {
                'title': 'BLOG',
                'isSelected': false
            }
            ]
        }
    },
  methods: {
    getNavItems(nav_items){
      console.log(nav_items[0].title);
      this.nav_items = nav_items;
    }
  }
}
</script>

