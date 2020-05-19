<template>
  <v-container>
    <v-row justify="space-between" align="center">
      <v-col cols="9" justify="center">
        <v-list-item>
          <v-list-item-avatar tile>
            <v-img
              height="70"
              contain
              :src="
                'https://www.countryflags.io/' + countryId + '/shiny/64.png'
              "
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <strong class="dashboard-title">{{ countryName }}</strong>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <!-- <v-col cols="3">
        <v-overflow-btn
          :items="dropdown_font"
          label="Select by date"
          target="#dropdown-example"
        ></v-overflow-btn
      ></v-col> -->
    </v-row>
    <v-row
      align="center"
      justify="space-between"
      class="dashboard-status-cards"
    >
      <StatusCard title="Confirmed" :number="confirmed" color="#26c6da" />
      <StatusCard title="Deaths" :number="deaths" color="pink" />
      <StatusCard title="Recovered" :number="recovered" color="light-green" />
      <StatusCard title="Active" :number="active" color="orange" />
    </v-row>

    <v-row justify="space-between" align="center">
      <MainTable class="main-table" />
      <MainNews class="main-news" />
    </v-row>
  </v-container>
</template>

<script>
import StatusCard from "../components/StatusCard";
import MainTable from "../components/MainTable";
import MainNews from "../components/MainNews";
import countries from "i18n-iso-countries";
import axios from "axios";

export default {
  computed: {
    countryName() {
      return countries.getName(this.$store.state.country, "en");
    },
    countryId() {
      return this.$store.state.country;
    },
    confirmed() {
      return this.$store.state.confirmed;
    },
    deaths() {
      return this.$store.state.deaths;
    },
    recovered() {
      return this.$store.state.recovered;
    },
    active() {
      return this.$store.state.active;
    }
  },
  mounted() {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  },
  components: {
    StatusCard,
    MainTable,
    MainNews
  },
  data() {
    return {
      dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"]
    };
  }
};
</script>

<style scoped>
.dashboard-title {
  font-size: 40px;
  display: inline;
}

.dashboard-status-cards {
  text-align: center;
}

.main-table {
  margin-top: 30px;
  margin-bottom: 20px;
}

.main-news {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
