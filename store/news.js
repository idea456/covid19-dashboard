import axios from "axios";

export const state = () => ({
  newsTable: []
});

export const actions = {
  async getNews({ commit, getters }) {
    console.log(index.getters.getCountry);
    axios
      .get(
        `
        https://newsapi.org/v2/top-headlines?country=${getters.getCountry}&apiKey=55d213d1ccc642ae8b9a94404b596959`
      )
      .then(({ data }) => console.log(data));
  }
};

export const getters = {};

export const mutations = {};
