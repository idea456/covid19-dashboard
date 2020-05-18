<template>
  <v-app>
    <MainHeader />
    <v-content>
      <nuxt />
    </v-content>
    <MainFooter />
  </v-app>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
