<template>
  <b-container fluid class="footer">
    Copyright &copy; {{ getFormattedDate() }} —
    <strong>Delicious Meals</strong>
  </b-container>
</template>

<script>
import formattedDate from '@/filters/date-filter';

export default {
  name: 'Footer',
  methods: {
    getFormattedDate() {
      return formattedDate();
    },
  },
};
</script>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ffc107;
  color: #000;
  text-align: center;
  font-size: .8em;
}
</style>
