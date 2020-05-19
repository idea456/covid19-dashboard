<template>
  <v-card color="white" dark width="250" height="150" max-width="400">
    <v-card-text>
      <p class="display-1 text--primary status-number">
        <strong>
          <AnimatedNumber
            :value="number"
            :duration="1500"
            :formatValue="formatNumber"
          />
        </strong>
      </p>
      <div class="text--primary status-text">{{ title }}</div>
    </v-card-text>
  </v-card>
</template>

<script type="text/babel">
import AnimatedNumber from "animated-number-vue";
export default {
  name: "StatusCard",
  props: [`title`, `number`, `color`],
  components: {
    AnimatedNumber
  },
  methods: {
    formatNumber(number) {
      return Math.floor(number);
    }
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
