<template>
  <div class="input">
    <span style="float: left">
      <h2 style="margin: 0 0 30px 30px">Центр поддержки пользователей НЭБ</h2>

      <h5 style="margin: 0 0 30px 30px">
        У нас есть готовые ответы на 90% ваших вопросов.
      </h5>

      <form
        class="input-group mb-3"
        style="margin: 0 0 0 30px"
        onsubmit="return false;"
      >
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
    </span>
    <!-- <span style="float: right">
      <img
        style="width: 560px"
        class="img"
        src="~assets/u272.svg"
      />
    </span> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input {
  padding: 10px;
  background-color: #f1f6f9;
  width: 1236px;
  height: 200px;
  margin: 0 auto 0;
}
</style>
