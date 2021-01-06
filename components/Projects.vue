<template>
  <div>
    <section class="header">
      <p style="margin: 10px 0 0 30px">Главная > Проекты > rusneb.ru</p>
      <h2 style="margin: 20px 0 0 30px">Проект rusneb.ru</h2>
      <form class="input-group" style="margin: 30px 0 0 30px">
        <input
          list="question"
          type="text"
          class="form-control"
          placeholder="Введите ваш вопрос"
          aria-label="Введите ваш вопрос"
          aria-describedby="button-addon2"
        />
        <datalist id="question">
          <option
            value="У меня есть учетная запись на портале госуслуги. Как авторизоваться?"
          ></option>
          <option value="Что такое электронный читательский билет?"></option>
          <option value="Я забыл свой пароль. Что мне делать?"></option>
        </datalist>
        <button class="btn btn-primary" type="button" id="button-addon2">
          Спросить
        </button>
      </form>
    </section>
    <section class="categories">
      <h3 style="margin: 20px 0 0 30px">Категории</h3>
      <div style="margin: 20px 0 0 30px">
        <div v-for="item in categories" :key="item.id" class="project">
          <div style="padding: 20px 0 0 20px">
            <span style="font-size: 22px">
              {{ item.name }}
            </span>
          </div>

          <p style="font-size: 20px; padding-left: 20px; cursor: pointer">
            &rarr; Подробнее
          </p>
        </div>
        <div v-show="!categories">К сожалению тут пока ничего нет!</div>
      </div>
    </section>
    <section class="popular-questions">
      <div>
        <h4>Популярные вопросы</h4>
        <span
          v-bind:class="{ active: activePopular }"
          v-on:click="activePopular = true"
          style="cursor: pointer; font-size: 22px; margin-right: 10px"
        >
          Читателям
        </span>
        <span
          v-bind:class="{ active: !activePopular }"
          v-on:click="activePopular = false"
          style="cursor: pointer; font-size: 22px"
        >
          Библиотекам </span
        ><br />
        <ul
          v-show="activePopular"
          v-for="item in popularReaders"
          :key="item.id"
          class="project"
        >
          <li style="list-style-type: none; font-size: 22px">
            {{ item.question }}
          </li>
          <p style="font-size: 18px; cursor: pointer">&rarr; Подробнее</p>
        </ul>
        <ul
          v-show="!activePopular"
          v-for="item in popularLibraries"
          :key="item.id"
          class="project"
        >
          <li style="list-style-type: none; font-size: 22px">
            {{ item.question }}
          </li>
          <p style="font-size: 18px; cursor: pointer">&rarr; Подробнее</p>
        </ul>
        <div v-show="!popularReaders && activePopular">
          К сожалению тут пока ничего нет!
        </div>
        <div v-show="!popularLibraries && !activePopular">
          К сожалению тут пока ничего нет!
        </div>
      </div>
    </section>
    <section class="ask-question">
      <div>
        <h4 class="center">
          Не нашли ответа на свой вопрос? Задайте его сейчас.
        </h4>
        <div class="buttons-center">
          <span>
            <button type="button" class="btn btn-primary">
              ПОДДЕРЖКА ЧИТАТЕЛЕЙ
            </button>
          </span>
          <span>
            <button type="button" class="btn btn-primary">
              ПОДДЕРЖКА БИБЛИОТЕК
            </button>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: null,
      popularReaders: null,
      popularLibraries: null,
      activePopular: true,
    };
  },

  async mounted() {
    let responseCategories = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb/sections/map/{section_id}"
    );
    this.categories = responseCategories.data;
    console.log(this.categories);

    let responsePopularReaders = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.questions@popular/"
    );
    this.popularReaders = responsePopularReaders.data.popular_questions;
    console.log(this.popularReaders);
  },
};
</script>

<style  scoped>
.header {
  padding: 10px;
  background-color: #f1f6f9;
  width: 1236px;
  height: 200px;
  margin: 0 auto 0;
}
.categories {
  padding: 10px;
  background-color: #fff;
  width: 1236px;
  height: 200px;
  margin: 0 auto 0;
}
.input-group {
  width: 50%;
}
.project {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  height: 150px;
  width: 300px;
  margin: 10px 10px 10px 0;
  border: 1px solid rgba(215, 215, 215, 1);
  border-radius: 10px;
}
.ask-question {
  margin: 0 auto 0;
  background-color: #fff;

  width: 1238px;
  height: 170px;

  padding-top: 20px;
  padding-left: 40px;
}
.center {
  text-align: center;
  padding-top: 10px;
  width: 1238px;
}
.buttons-center {
  margin: 10px 0 0 400px;
  display: inline-block;
}
.popular-questions {
  margin: 0 auto 0;
  background-color: #fff;

  width: 1238px;
  height: 400px;
  padding-top: 20px;
  padding-left: 40px;
}
.active {
  font-weight: bold;
}
</style>
