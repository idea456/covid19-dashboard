<template>
  <v-card color="white" dark width="250" height="150" max-width="400">
    <v-card-text>
      <p class="display-1 text--primary status-number">
        <strong><ICountUp :delay="1000" :endVal="number"/></strong>
      </p>
      <div class="text--primary status-text">{{ title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import ICountUp from "vue-countup-v2";

export default {
  name: "StatusCard",
  props: [`title`, `number`, `color`],
  components: {
    ICountUp
  }
};
</script>

<style scoped>
.status-number {
  padding-top: 20px;
}

.status-text {
  font-size: 20px;
}
</style>
