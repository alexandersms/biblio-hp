<template>
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
    books() {
      return this.$store.state.books;
    }
  },

  mounted() {
    console.log("Mounted");
    this.$store.dispatch("getBooks");
  }
};
</script>

<style scoped></style>
