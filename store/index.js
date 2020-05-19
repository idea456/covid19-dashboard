export const state = () => ({
  country: "id"
});

export const mutations = {
  changeCountry(state, newCountry) {
    state.country = newCountry;
  }
};
