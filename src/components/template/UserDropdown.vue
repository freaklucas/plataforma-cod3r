<template>
  <div class="user-dropdown">
    <div class="user-bottom relative">
      <span class="">{{ user.name }}</span>
      <div class="user-dropdown-img">
        <Gravatar :email="user.email" alt="imagem do usuario" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="/admin"
        ><i class="fa fa-cogs"></i>Administração</router-link
      >
      <router-link to="/"><i class="fa fa-sign-out"></i>Sair</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: "UserDropdown",
  components: {
    Gravatar,
  },
  computed: mapState(["user"]),
};
</script>

<style>
.user-dropdown {
  height: 100%;
}

.user-bottom {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-img > img {
  width: 37px;
  border-radius: 10px;
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  margin-top: 22px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 0.8;
}

.user-dropdown-content a {
  padding: 8.5px;
}

.user-dropdown-content a:hover {
  background-color: #ededed;
}
</style>
