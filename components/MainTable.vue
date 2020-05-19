<template>
  <v-data-table
    :headers="headers"
    :items="tableStatus"
    :items-per-page="5"
    class="elevation-3"
  >
    <template v-slot:item.cases="{ item }">
      <v-chip :color="getColor(item.cases)" dark>{{ item.cases }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";

export default {
  computed: {
    tableStatus() {
      return this.$store.state.tableStatus;
    }
  },
  mounted() {
    this.$store.dispatch("getStatusTable");
  },
  data() {
    return {
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date"
        },
        { text: "Deaths", value: "deaths" },
        { text: "Recovered", value: "recovered" },
        { text: "Active", value: "active" },
        { text: "Total Cases", value: "cases" }
      ],
      status: [
        {
          date: moment(new Date().toISOString()).format(
            "MMMM Do YYYY, h:mm:ss a"
          ),
          deaths: 159,
          recovered: 6.0,
          active: 24,
          cases: 4.0
        }
      ]
    };
  },
  methods: {
    getColor(cases) {
      if (cases > 400) return "red";
      else if (cases > 200) return "orange";
      else return "green";
    }
  }
};
</script>
