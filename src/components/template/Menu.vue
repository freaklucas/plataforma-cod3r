<template>
  <aside class="menu" v-show="isMenuVisible">
      <menu-content />
  </aside>
</template>

<script>

import { mapState } from 'vuex'
import MenuContent from './MenuContent'

export default {
    name: 'Menu',
    components: { MenuContent },
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
