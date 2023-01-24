<template>

<nav>
  <ul class="flex flex-wrap items-center justify-center text-lg font-bold font-mono">
    <router-link @click="makeSelect(item)" v-for="item in nav_items" :key="item.title" :class="{selected: item.isSelected}" class="cursor-pointer mx-10 my-14 px-3" :to="item.path">{{item.title}}</router-link>
  </ul>
</nav>

<router-view></router-view>
<teleport to="#footer">
<Footer />
</teleport>
</template>

<script>

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
        return {
            nav_items: [{
                'title': 'BIO',
                'path':'/',
                'isSelected': true
            },
            {
                'title': 'PROJECTS',
                'path': '/projects',
                'isSelected': false
            },
            {
                'title': 'MY WORK',
                'path': '/portofolio',
                'isSelected': false
            },
            {
                'title': 'CONTACT',
                'path': '/contact',
                'isSelected': false
            }
            ]
        }
    },
  methods: {
    makeSelect(item) {
        for (let i = 0; i < this.nav_items.length; i++) {
            this.nav_items[i].isSelected = false;
        }
        item.isSelected = true;
      }
  }
}
</script>

<style>
.selected {
    background-color: black;
    color: rgb(236, 234, 211);
    border-radius: 0.25rem;
}
</style>