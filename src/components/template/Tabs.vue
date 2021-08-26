<template>
  <article class="flex items-center justify-center">
    <div class="container mx-auto shadow-lg">
      <header class="tabs mt-3 ml-12 pl-12 flex justify-center items-center">
        <ul class="flex list-none">
          <li class="mr-5" v-for="(tab, index) in tabs" :key="index">
            <div
              class="
                nav-item
                cursor-pointer
                py-4
                px-7
                text-white
                font-popins
                rounded-lg
                bg-indigo-500
                hover:bg-blue-900
                shadow-lg
                block
                md:inline-block
                rounded
              "
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)"
            >
              {{ tab.name }}
            </div>
          </li>
        </ul>
      </header>
      <section class="tabs-details p-10">
        <slot> </slot>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Tabs",
  data: () => {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style>
</style>
