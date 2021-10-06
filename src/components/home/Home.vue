<template>
  <div class="home container">
    <page-title
      icon="fa fa-home"
      main="Dashboard"
      sub="Base do Conhecimento"
      class="font-mono text-4xl mb-14 mt-8"
    />
    <div class="stats flex">
      <Stat
        title="Categorias"
        :value="stat.categories"
        icon="fa fa-folder"
        color="#d54d50"
        class="font-bold text-base hover:bg-red-100 rounded"
      >
        <router-link to="/admin"></router-link>
      </Stat>
        <Stat
          title="Artigos"
          :value="stat.articles"
          icon="fa fa-file"
          color="#3bc480"
          class="font-bold text-base hover:bg-green-100 rounded"
        >
        <router-link to="/admin"></router-link>
        </Stat>
        <Stat
          title="Usuarios"
          :value="stat.users"
          icon="fa fa-user"
          color="#3282cd"
          class="font-bold text-base hover:bg-blue-100 rounded"
        >
          <router-link to="/articles"></router-link>
        </Stat>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import Stat from "./Stat.vue";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: {
    PageTitle,
    Stat,
  },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script>

<style>
</style>
