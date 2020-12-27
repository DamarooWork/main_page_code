<template>
  <div>
    <Header />
    <Input />
    <Server />
    <Footer />
    <Nuxt />
  </div>
</template>




<script>
import Header from "@/components/Header";
import Input from "@/components/Input";
import Server from "@/components/Server";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Input,
    Server,
    Footer,
  },
};
</script>



<style>
</style>
