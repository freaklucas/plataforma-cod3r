<template>
  <div class="admin-pages">
    <page-title
      icon="fa fa-cogs"
      main="Administração do sistema"
      sub="Cadastros e Cia"
      class="font-mono text-4xl"
    />
    <div class="admin-pages-tabs">
      <Tabs>
        <Tab name="Artigos" selected="true">
          <ul>
            <li>
              <h1 class="text-5xl font-bold">Artigos</h1>
              <article-admin />
            </li>
          </ul>
        </Tab>
        <Tab name="Categorias" selected="true" class="text-3xl font-bold">
          <ul>
            <li>
              <category-admin />
            </li>
          </ul>
        </Tab>
        <Tab name="Usuários" selected="true" class="text-3xl font-bold">
          <ul>
            <li>
              <user-admin />
            </li>
          </ul>
        </Tab>
      </Tabs>
    </div>
  </div>
</template>
 


<script>
import PageTitle from "../template/PageTitle.vue";
import ArticleAdmin from "./ArticleAdmin.vue";
import CategoryAdmin from "./CategoryAdmin.vue";
import UserAdmin from "./UserAdmin.vue";
import Tab from "../template/Tab.vue";
import Tabs from "../template/Tabs.vue";

export default {
  name: "AdminPages",
  components: {
    PageTitle,
    ArticleAdmin,
    CategoryAdmin,
    UserAdmin,
    Tab,
    Tabs,
  },
};
</script>

<style>
</style>
