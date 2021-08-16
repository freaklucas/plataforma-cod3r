<template>
  <div class="page-title">
    <h1 class="font-bold text-2xl">
      <i v-if="icon" :class="icon"></i>
      {{ main }}
    </h1>
    <h2 class="font-bold text-xl">{{ sub }}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"],
};
</script>

<style>
.page-title h1 {
  margin: 0px;
}

.page-title h2 {
  color: #7777;
  margin-top: 5px;
  font-size: 1.3rem;
}
</style>