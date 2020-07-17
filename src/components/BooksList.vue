<template>
  <!-- 
    Composant permettant d'afficher la liste des livres 
  -->
  <div class="container">
    <div class="row">
      <BookCard v-for="book in books" :key="book.isbn" :book="book" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BookCard from "@/components/BookCard.vue";
export default {
  name: "BooksList",

  components: {
    BookCard
  },

  computed: {
    /*
     * Récuperation des données de l'état books
     * via le store
     */
    ...mapGetters(["books"])
  },

  mounted() {
    /*
     * Chargement des livres disponible dans l'api via
     * le store grâce à l'action getBooks
     */
    this.getBooks();
  },
  methods: {
    ...mapActions(["getBooks"])
  }
};
</script>
