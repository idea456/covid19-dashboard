import axios from "axios";
import moment from "moment";

export const state = () => ({
  country: "id",
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  active: 0,
  tableStatus: [],
  newsTable: [],
  graphConfirmed: [],
  graphDeaths: [],
  graphRecovered: [],
  graphActive: [],
  datacollection: null
});

export const actions = {
  async getStatus({ commit, getters }) {
    axios
      .get(`https://api.covid19api.com/total/country/${getters.getCountry}`)
      .then(({ data }) => {
        commit("setStatus", {
          confirmed: data[data.length - 1].Confirmed,
          deaths: data[data.length - 1].Deaths,
          recovered: data[data.length - 1].Recovered,
          active: data[data.length - 1].Active
        });
      });
  },
  async getStatusTable({ commit, getters, dispatch }) {
    axios
      .get(
        `https://api.covid19api.com/total/dayone/country/${getters.getCountry}`
      )
      .then(({ data }) => {
        let newTableStatus = [];
        for (let i = 0; i < data.length; i++) {
          newTableStatus.push({
            date: moment(data[i].Date).format("MMMM Do YYYY, h:mm:ss a"),
            deaths: data[i].Deaths,
            recovered: data[i].Recovered,
            active: data[i].Active,
            cases: data[i].Confirmed
          });
        }
        commit("setTableStatus", newTableStatus);
        dispatch("getNews");
        // set the graph
        commit("setGraph", data);
        commit("setDataCollection");
      });
  },
  async getNews({ commit, getters }) {
    axios
      .get(
        `
        http://newsapi.org/v2/top-headlines?country=${getters.getCountry}&q=corona&apiKey=55d213d1ccc642ae8b9a94404b596959`
      )
      .then(({ data }) => commit("setNewsTable", data.articles));
  }
};

export const getters = {
  getCountry(state) {
    return state.country;
  },
  getGraphConfirmed(state) {
    return state.graphConfirmed;
  },
  getGraphDeaths(state) {
    return state.graphDeaths;
  },
  getGraphRecovered(state) {
    return state.graphRecovered;
  },
  getGraphActive(state) {
    return state.graphActive;
  }
};

export const mutations = {
  changeCountry(state, newCountry) {
    state.country = newCountry;
  },
  setStatus(state, status) {
    state.confirmed = status.confirmed;
    state.deaths = status.deaths;
    state.recovered = status.recovered;
    state.active = status.active;
  },
  setTableStatus(state, newTableStatus) {
    state.tableStatus = newTableStatus;
  },
  setNewsTable(state, newNewsTable) {
    state.newsTable = newNewsTable;
  },
  setGraph(state, data) {
    let confirmed = [];
    let deaths = [];
    let recovered = [];
    let active = [];

    data.map(element => {
      confirmed.push({
        x: element.Date,
        y: element.Confirmed
      });
      deaths.push({
        x: element.Date,
        y: element.Deaths
      });
      recovered.push({
        x: element.Date,
        y: element.Recovered
      });
      active.push({
        x: element.Date,
        y: element.Active
      });
    });
    state.graphConfirmed = confirmed;
    state.graphDeaths = deaths;
    state.graphRecovered = recovered;
    state.graphActive = active;
  },
  setDataCollection(state) {
    state.datacollection = {
      datasets: [
        {
          label: "Confirmed",
          data: state.graphConfirmed,
          backgroundColor: "transparent",
          borderColor: "rgba(1, 116, 188, 0.50)",
          pointBackgroundColor: "rgba(1, 116, 188, 1)"
        },
        {
          label: "Deaths",
          data: state.graphDeaths,
          backgroundColor: "transparent",
          borderColor: "rgba(255,0, 87, 0.50)",
          pointBackgroundColor: "rgba(255,0, 87, 1)"
        },
        {
          label: "Recovered",
          data: state.graphRecovered,
          backgroundColor: "transparent",
          borderColor: "rgba(0, 156, 139, 0.50)",
          pointBackgroundColor: "rgba(0, 156, 139, 1)"
        },
        {
          label: "Active",
          data: state.graphActive,
          backgroundColor: "transparent",
          borderColor: "rgba(255, 0, 172, 0.50)",
          pointBackgroundColor: "rgba(255, 0, 172, 1)"
        }
      ]
    };
  }
};
