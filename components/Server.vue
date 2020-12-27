<template>
  <div class="server">
    <section class="projects">
      <div>
        <h4>Проекты</h4>
        <div>
          <div v-for="item in projects" :key="item.id">
            <div
              style="
                float: left;
                display: inline;
                width: 500px;
                margin: 0 0 10px 0;
              "
            >
              <div class="cube" style="float: left"></div>
              <span style="margin-left: 10px">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="popular-questions">
      <div>
        <h4>Популярные вопросы</h4>
        <span> Читателям </span>
        <span> Библиотекам </span>
        <ul v-for="item in popular" :key="item.id" style="margin-top: 20px">
          <li>
            {{ item.question }}
          </li>
        </ul>
      </div>
    </section>
    <section class="help">
      <div>
        <h4 style="margin-bottom: 40px">Поддержка rusneb.ru</h4>

        <h5>Читателям</h5>

        <h5>Библиотекам</h5>
      </div>
    </section>

    <section class="ask-question">
      <div>
        <h4 class="center">
          Не нашли ответа на свой вопрос? Задайте его сейчас
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
      projects: [],
      popular: [],
    };
  },
  async mounted() {
    let response = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.projects/"
    );
    this.projects = response.data.projects;
    console.log(this.projects);

    let responsePopular = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.questions@popular/"
    );
    this.popular = responsePopular.data.popular_questions;
    console.log(this.popular);
  },
};
</script>

<style scoped>
.server {
  left: 0px;
  top: 0px;
  width: 1236px;
  height: 200px;
  margin: 0 auto;
}
.projects {
  float: left;
  border-width: 1px;
  border-style: solid;

  width: 650px;
  height: 220px;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  border-color: rgba(215, 215, 215, 1);
}
.help {
  float: left;
  border-width: 1px;
  border-style: solid;

  width: 650px;
  height: 452px;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  border-color: rgba(215, 215, 215, 1);
}
.popular-questions {
  float: right;
  border-width: 1px;
  border-style: solid;

  width: 560px;
  height: 692px;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  margin-left: 20px;
  border-color: rgba(215, 215, 215, 1);
}
.ask-question {
  float: left;
  border-width: 1px;
  border-style: solid;
  width: 1238px;
  height: 170px;
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 50px;
  border-color: rgba(215, 215, 215, 1);
}
.center {
  text-align: center;
  padding-top: 10px;
  width: 1238px;
}
.buttons-center {
  width: 1238px;
  margin: 10px 0 0 400px;
  float: left;
  display: block;
}
.cube {
  width: 34px;
  height: 34px;
  background-color: rgba(170, 170, 170, 0.588235294117647);
}
li {
  list-style-type: circle;
}
</style>
