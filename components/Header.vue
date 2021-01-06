<template>
  <div class="header">
    <div style="display: inline">
      <p>
        <img class="img" src="~assets/u533.svg" />
      </p>
      <p>
        <b style="font-size: 22px">Logotype</b>
      </p>

      <p style="margin: 0 0 0 180px">
        <span>Проекты НЭБ</span>
      </p>
      <p>
        <img class="img" src="~assets/u51.svg" style="cursor: pointer" />
      </p>
      <p style="margin: 0 0 0 20px">
        <span>Обратная связь</span>
      </p>
      <p style="margin: 0 0 0 150px">
        <img
          class="img"
          src="~assets/u271.svg"
          tabindex="0"
          style="outline: none; cursor: pointer"
        />
      </p>
      <p>
        <span>Войти</span>
      </p>
      <p style="margin: 0 0 0 20px">
        <img class="img" src="~assets/u519.svg" alt="" />
      </p>
      <p>
        <span> ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ </span>
      </p>
      <p style="font-size: 22px; margin: 0 0 0 40px">
        <span  v-on:click="active = !active" style="cursor: pointer">Меню</span>
        <span  v-on:click="active = !active" style="cursor: pointer">
          &equiv;
        </span>
        <div class="menu" v-show="active">
          <nuxt-link to="/"><p style="display: block; color: black;" v-on:click="active = !active">Главная</p></nuxt-link>
          <nuxt-link to="/project"> <p style="display: block; color: black;" v-on:click="active = !active">Проекты</p> </nuxt-link>
        </div>

      <p style="display: block; margin: 0 0 0 45px; width: 200px">
        <span>Центр поддержки</span>
      </p>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
p {
  display: inline;
}
.header {
background-color: #fff;
  left: 0px;
  top: 0px;
  width: 1236px;
  height: 120px;
  padding: 40px 10px 0 10px;
  margin: 0 auto 0;
}
.header-margin {
  margin: 0 0 0 100px;
}
.menu {

  border: 2px solid rgba(215, 215, 215, 1);;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
  padding: 13px 0 0 13px;
  height: 100px;
  width: 100px;
  background-color: white;
  color: black;
  float: right;

  z-index: 2;
}
</style>
