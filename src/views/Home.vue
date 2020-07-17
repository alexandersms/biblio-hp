<template>
  <div class="home">
    <BooksList />
  </div>
</template>

<script>
import BooksList from "@/components/BooksList.vue";

export default {
  name: "Home",
  components: {
    BooksList
  }
};
</script>
