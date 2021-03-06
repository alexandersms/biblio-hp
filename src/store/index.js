import Vue from "vue";
import Vuex from "vuex";
import Books from "../api/Books";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");

export default new Vuex.Store({
  state: {
    books: [],
    errormessage: "",
    cart: cart ? JSON.parse(cart) : []
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
      this.commit("SAVE_DATA");
      console.log(state.cart.quantity);
    },
    SAVE_DATA(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_BOOK_FROM_CART(state, book) {
      state.cart = state.cart.filter(item => {
        return item.book.isbn !== book.isbn;
      });
      this.commit("SAVE_DATA");
    },
    CLEAR_CART_ITEMS(state) {
      state.cart = [];
      this.commit("SAVE_DATA");
    }
  },
  actions: {
    getBooks({ commit }) {
      Books.all()
        .then(data => {
          commit("SET_BOOKS", data);
          this.state.errormessage = "";
        })
        .catch(error => commit("API_FAILURE", error));
    },
    addBookToCart({ commit }, { book, quantity }) {
      commit("ADD_TO_CART", { book, quantity });
    },
    removeBookFromCart({ commit }, book) {
      commit("REMOVE_BOOK_FROM_CART", book);
    },
    clearCartItems({ commit }) {
      commit("CLEAR_CART_ITEMS");
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
