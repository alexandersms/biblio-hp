import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const booksUrl = "http://henri-potier.xebia.fr/books";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    errormessage: "",
    cart: []
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
    },
    ADD_TO_CART(state, { book, quantity }) {
      let bookInCart = state.cart.find(item => {
        return item.book.isbn === book.isbn;
      });

      if (bookInCart) {
        bookInCart.quantity += quantity;
        return;
      }

      state.cart.push({
        book,
        quantity
      });
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
    },
    addBookToCart({ commit }, { book, quantity }) {
      commit("ADD_TO_CART", { book, quantity });
    }
  },
  getters: {
    books: state => state.books,
    erromessage: state => state.errormessage,
    cartItemCount: state => state.cart.length,
    cartTotalPrice: state => {
      let total = 0;

      state.cart.forEach(item => {
        total += item.book.price * item.quantity;
      });

      return total;
    }
  }
});
