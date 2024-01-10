<template>
  <div id="appPage">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './layout/components/Header.vue';
import Footer from './layout/components/Footer.vue';
export default{
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
