<template>
  <div class="stat flex flex-1 rounded 
    mr-10 mb-10 bg-white p-20 border-2 border-indigno-600
    w-full
    ">
      <div class="stat-icon items-center mr-2 text-4xl">
            <i class="" :class="icon" :style="style"></i>
      </div>
      <div class="stat-info flex-col items-end ">
          <span class="stat-title text-xl">{{ title }}</span>
          <span class="stat-value text-3xl">{{ value }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Stat',
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style() {
            return "color: " + (this.color || "#000")
        }
    }
}
</script>

<style>

</style>
