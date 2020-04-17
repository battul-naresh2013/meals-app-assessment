<template>
  <div id="app">
    <app-header />
    <div class="mt-5">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script>
import appHeader from './components/header/Header.vue';
import appFooter from './components/footer/Footer.vue';

export default {
  components: {
    appHeader,
    appFooter,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto Condensed', sans-serif;
}

#app {
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
