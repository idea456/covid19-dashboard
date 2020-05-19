<template>
  <v-footer>
    <v-row class="text-center" cols="12">
      <v-col>Made possible with</v-col>
      <v-col cols="12" align="center">
        <router-link to="https://covid19api.com/">
          <v-img
            :src="require('../assets/images/logo-covid19api.png')"
            contain
            height="60"
            width="120"
          />
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>
