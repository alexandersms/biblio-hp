<template>
  <div class="cart">
    <BookCart />
  </div>
</template>

<script>
import BookCart from "@/components/BookCart.vue";

export default {
  name: "Cart",
  components: {
    BookCart
  }
};
</script>
