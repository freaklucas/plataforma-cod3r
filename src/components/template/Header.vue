<template>
  <header class="
    fixed
    flex items-center justify-between flex-wrap p-4
    bg-gradient-to-r from-green-400 to-blue-500  w-full
    "
  >
    <a class="
        toggle text-decoration-none center flex 
        hover:bg-green-600 transition duration-200 
        focus-within:text-gray-600
        p-2 h-3/2
      " 
      @click="toggleMenu" v-if="!hideToggle"
    >
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title flex-grow text-lg text-center font-normal text-white	">
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <user-dropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>

import UserDropdown from './UserDropdown.vue'

export default {
    name: 'Header',
    components: {
        UserDropdown
    },
    props: {
      title: String,
      hideToggle: Boolean,
      hideUserDropdown: Boolean
    },
    computed: {
      icon() {
        return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
      }
    },
    methods: {
      toggleMenu() {
        this.$store.commit('toggleMenu')
      }
    }
}
</script>
