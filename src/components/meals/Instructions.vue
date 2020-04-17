<template>
  <b-col>
    <hr />
    <div class="text-left">
      <strong>Instructions</strong>
    </div>
    <b-card-text class="text-left pb-5">{{mealDetails.strInstructions}}</b-card-text>
  </b-col>
</template>

<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'Instructions',
  mixins: [mixin],
};
</script>
