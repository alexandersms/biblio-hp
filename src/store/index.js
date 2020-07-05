import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const booksUrl = "http://henri-potier.xebia.fr/books";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    errormessage: ""
  },
  mutations: {
    API_FAILURE(state, error) {
      if (error.message.includes("400")) {
        state.errormessage = "Erreur de connexion à l'api";
      } else if (error.message.includes("404")) {
        state.errormessage = "Données non trouvées";
      }
    },
    SET_BOOKS(state, data) {
      state.books = data.data;
    }
  },
  actions: {
    getBooks({ commit }) {
      axios
        .get(`${booksUrl}`)
        .then(data => {
          commit("SET_BOOKS", data);
          this.state.errormessage = "";
        })
        .catch(error => commit("API_FAILURE", error));
    }
  },
  modules: {}
});
