<template>
  <!-- 
    Composant représentant une card "livre"
  -->
  <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
      <img class="card-img" :src="book.cover" />
      <div class="card-body">
        <h4 class="card-title">{{ book.title }}</h4>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">{{ book.price }} &euro;</h5>
          </div>
          <button class="btn btn-danger mt-3" @click="addToCart()">
            <i class="fas fa-shopping-cart"></i> Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Book",
  props: ["book"],

  methods: {
    ...mapActions(["addBookToCart"]),
    addToCart() {
      this.addBookToCart({
        book: this.book,
        quantity: 1
      });
    }
  }
};
</script>
