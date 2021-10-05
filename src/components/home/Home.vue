<template>
  <div class="home">
    <page-title
      icon="fa fa-home"
      main="Dashboard"
      sub="Base do Conhecimento"
      class="font-mono text-4xl mb-14 mt-14"
    />
    <div class="stats flex justify-between flex-wrap">
      <router-link to="/admin">
        <Stat
          title="Categorias"
          :value="stat.categories"
          icon="fa fa-folder"
          color="#d54d50"
          class="font-bold text-base hover:bg-blue-100"
        />
      </router-link>
      <router-link to="/articles">
        <Stat
          title="Artigos"
          :value="stat.articles"
          icon="fa fa-file"
          color="#3bc480"
          class="font-bold text-base hover:bg-blue-100"
        />
      </router-link>
      <Stat
        title="Usuarios"
        :value="stat.users"
        icon="fa fa-user"
        color="#3282cd"
        class="font-bold text-base hover:bg-blue-100"
      />
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
