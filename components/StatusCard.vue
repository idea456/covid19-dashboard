<template>
  <v-card :color="color" dark width="250" height="150" max-width="400">
    <v-card-text>
      <p class="display-1 text--primary status-number">
        <strong>{{ number }}</strong>
      </p>
      <div class="text--primary status-text">
        {{ title }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StatusCard",
  props: [`title`, `number`, `color`]
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
