<template>
  <v-card max-width="500" min-width="500" tile>
    <v-card-title>Latest news</v-card-title>
    <v-list max-height="300" class="overflow-y-auto">
      <v-list-item v-for="news in newsTable" :key="news.title" link two-line>
        <v-list-item-content>
          <v-list-item-title>{{ news.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ news.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    newsTable() {
      return this.$store.state.newsTable;
    }
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
  name: "MainNews"
};
</script>
