<template>
    <b-navbar fixed="top" toggleable="lg" type="light" variant="warning">
      <b-navbar-brand href="#">Delicious Meals</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
           <search-meal />
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import searchMeal from '@/components/meals/SearchMeal.vue';

export default {
  name: 'Header',
  components: {
    searchMeal,
  },
};
</script>
