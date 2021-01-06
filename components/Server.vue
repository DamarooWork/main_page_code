<template>
  <div class="server">
    <section class="projects">
      <div>
        <h4>Проекты</h4>
        <div>
          <div v-for="item in projects" :key="item.id" class="project">
            <div style="padding: 20px 0 0 20px">
              <span style="font-size: 22px">
                {{ item.name }}
              </span>
            </div>

            <p style="font-size: 20px; padding-left: 20px; cursor: pointer">
              &rarr; Подробнее
            </p>
          </div>
          <div v-show="!projects">К сожалению тут пока ничего нет!</div>
        </div>
      </div>
    </section>

    <section class="help">
      <div>
        <h4 style="margin-bottom: 40px">Поддержка rusneb.ru</h4>

        <h5>Читателям</h5>
        <div>
          <div v-for="item in chosenReaders" :key="item.id" class="project">
            <div style="padding: 20px 0 0 20px">
              <span style="font-size: 22px">
                {{ item.name }}
              </span>
            </div>

            <p style="font-size: 20px; padding-left: 20px; cursor: pointer">
              &rarr; Подробнее
            </p>
          </div>
          <div v-show="!chosenReaders">К сожалению тут пока ничего нет!</div>
        </div>

        <h5 style="margin-top: 40px">Библиотекам</h5>
        <div>
          <div v-for="item in chosenLibraries" :key="item.id" class="project">
            <div style="padding: 20px 0 0 20px">
              <span style="font-size: 22px">
                {{ item.name }}
              </span>
            </div>

            <p style="font-size: 20px; padding-left: 20px; cursor: pointer">
              &rarr; Подробнее
            </p>
          </div>
          <div v-show="!chosenLibraries">К сожалению тут пока ничего нет!</div>
        </div>
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
      projects: null,
      chosenReaders: null,
      chosenLibraries: null,
      popularReaders: null,
      popularLibraries: null,
      inSection: null,
      activePopular: true,
    };
  },
  async fetch({ store }) {
    if (store.getters["chosenProject/popularReaders"].length === 0) {
      await store.dispatch("chosenProject/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["chosenProject/popularReaders"];
    },
  },
  async mounted() {
    let responseProjects = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.projects/"
    );
    this.projects = responseProjects.data.projects;
    console.log(this.projects);

    // let responseChosenReaders = await this.$axios.$get(
    //   "http://help.support.rusneb.dev.infospice.ru/api/kb.sections@сhosenProject/"
    // );
    // this.chosenReaders = responseChosenReaders;
    // console.log(this.chosenReaders);

    let responsePopularReaders = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.questions@popular/"
    );
    this.popularReaders = responsePopularReaders.data.popular_questions;
    console.log(this.popularReaders);

    let responseInSection = await this.$axios.$get(
      "http://help.support.rusneb.dev.infospice.ru/api/kb.questionSectionsList/1/"
    );
    this.inSection = responseInSection.data;
    console.log(this.inSection);
  },
};
</script>

<style scoped>
.server {
  width: 1236px;
  margin: 0 auto;
}
.projects {
  background-color: #fff;

  width: 1238px;
  height: 450px;
  padding-top: 20px;
  padding-left: 40px;
}
.help {
  background-color: #fff;

  width: 1238px;
  height: 400px;

  padding-top: 20px;
  padding-left: 40px;
}
.popular-questions {
  background-color: #fff;

  width: 1238px;
  height: 400px;
  padding-top: 20px;
  padding-left: 40px;
}
.ask-question {
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
.active {
  font-weight: bold;
}
</style>
