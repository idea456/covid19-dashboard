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
        <v-list-item-content>
          <v-subheader>CURRENT COUNTRY</v-subheader>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar tile>
          <v-img src="https://www.countryflags.io/ID/shiny/64.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <strong>Indonesia</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          <v-list-item
          link
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
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
  name: "MainHeader",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "" },
        {
          title: "View in Github",
          icon: "mdi-github",
          link: "https://github.com/idea456/covid19-dashboard"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nd-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
