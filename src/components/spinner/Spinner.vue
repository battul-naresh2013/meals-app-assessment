<template>
  <div class="spinner">
    <div class="text-center m-5">Loading...
      <b-spinner type="grow" label="Loading"
      variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>
<style scoped>
.spinner{
    width: 3rem; height: 3rem;
    margin-top: 10%;
    margin-left: 45%;
}
</style>
