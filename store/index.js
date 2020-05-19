export const state = () => ({
  country: "id",
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  active: 0
});

export const mutations = {
  changeCountry(state, newCountry) {
    state.country = newCountry;
  },
  setStatus(state, status) {
    state.confirmed = status.confirmed;
    state.deaths = status.deaths;
    state.recovered = status.recovered;
    state.active = status.active;
  }
};
