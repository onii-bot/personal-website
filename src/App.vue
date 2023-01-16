<template>
<Navbar :getNavItems="getNavItems"/>
<Bio v-if="this.nav_items[0].isSelected" />
<Portofolio v-if="this.nav_items[1].isSelected" />
<Podcast v-if="this.nav_items[2].isSelected" />
<Contact v-if="this.nav_items[3].isSelected" />
<Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Bio from "./components/Bio.vue";
import Portofolio from "./components/Portofolio.vue";
import Podcast from "./components/Podcast.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Bio,
    Portofolio,
    Podcast,
    Contact,
    Footer
  },
  data() {
        return {
            nav_items: [{
                'title': 'BIO',
                'isSelected': true
            },
            {
                'title': 'PROJECTS',
                'isSelected': false
            },
            {
                'title': 'MY WORK',
                'isSelected': false
            },
            {
                'title': 'CONTACT',
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

