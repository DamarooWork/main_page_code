<template>
  <div class="main">
    <Header />
    <main>
      <div><Nuxt /></div>
    </main>
     <Footer />
  </div>
</template>




<script>
import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>



<style>
.main{
  width: 100%;
  min-height: 600px;
background-color: #F2F2F2;
}
</style>
