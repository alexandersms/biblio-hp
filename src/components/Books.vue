<template>
  <!-- 
    Composant permettant d'afficher la liste des livres 
  -->
  <div class="container">
    <div class="row">
      <Book v-for="book in books" :key="book.isbn" :book="book" />
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
export default {
  name: "Books",

  components: {
    Book
  },

  computed: {
    /*
     * Récuperation des données de l'état books
     * via le store
     */
    books() {
      return this.$store.state.books;
    }
  },

  mounted() {
    /*
     * Chargement des livres disponible dans l'api via
     * le store grâce à l'action getBooks
     */
    this.$store.dispatch("getBooks");
  }
};
</script>
