<template>
  <div>
    <nav>
      <v-toolbar>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>Covid-19 Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list-item>
        <v-list-item-avatar tile>
          <v-img src="https://www.countryflags.io/ID/shiny/64.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <strong>Indonesia</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav class="py-0">
        <v-list-item <v-list-item link v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("hii im mounted!");
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "View in Github", icon: "mdi-github" }
      ]
    };
  }
};
</script>

<style scoped></style>
