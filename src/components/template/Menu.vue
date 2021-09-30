<template>
  <aside class="menu" v-show="isMenuVisible">
    <menu-content v-show="isMenuVisible" />
    <div class="menu-content flex flex-col">
      <button
        to="/articles"
        class="
          toggle
          text-decoration-none
          center
          flex
          hover:bg-gray-900
          transition
          duration-200
          focus-within:text-gray-600
          p-2
          h-3/2
        "
        @click="goToArticles()"
      >
        <ul>
          <li class="font-mono text-xl text-white ml-4 mb-2 mt-8">
            Design Moderno
          </li>
          <li class="font-mono text-lg text-white ml-4 mb-2 mt-2">CSS</li>
          <li class="font-mono text-sm text-white ml-4">CSS Grid</li>
        </ul>
      </button>
      <button
        class="
          toggle
          text-decoration-none
          center
          flex
          hover:bg-blue-900
          transition
          duration-200
          focus-within:text-gray-600
          p-2
          h-3/2
          mt-2
        "
      >
        <ul>
          <li class="font-mono text-xl text-white ml-4 mb-2 mt-8">
            Lógica Back-end
          </li>
          <li class="font-mono text-lg text-white ml-4 mb-2 mt-2">Node js</li>
          <li class="font-mono text-sm text-white ml-4">MongoDB</li>
        </ul>
      </button>
      <button
        class="
          toggle
          text-decoration-none
          center
          flex
          hover:bg-red-900
          transition
          duration-200
          focus-within:text-gray-600
          p-2
          h-3/2
          mt-2
        "
        @click="visible = !visible"
      >
        <content-article v-if="visible" />
        <ul>
          <li class="font-mono text-xl text-white ml-4 mb-2 mt-8">
            Programação Funcional
          </li>
          <li class="font-mono text-lg text-white ml-4 mb-2 mt-2">Arrow</li>
          <li class="font-mono text-sm text-white ml-4 mb-2">
            Spread, Destructuring
          </li>
        </ul>
      </button>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  components: {},
  computed: mapState(["isMenuVisible"]),
  methods: {
      goToArticles() {
          this.$router.push('/articles')
      }
  }
};
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
