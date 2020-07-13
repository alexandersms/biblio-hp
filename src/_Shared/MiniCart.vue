<template>
  <div class="dropdown-menu p-2 minicart" aria-labelledby="triggerId">
    <div v-for="item in cart" :key="item.book.isbn">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.book.title }}</strong>
          <br />
          {{ item.quantity }} x {{ item.book.price * item.quantity }} &euro;
        </div>
        <div>
          <a
            href=""
            class="badge badge-danger"
            @click.prevent="removeBookFromCart(item.book)"
            >supprimer</a
          >
        </div>
      </div>
      <hr />
    </div>
    <div class="d-flex justify-content-between">
      <span>Total: {{ cartTotalPrice }} &euro;</span>
      <a href="" @click.prevent="clearCartItems()">Vider le panier</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  /*
   * Récuperation des données de l'état cart
   * via le store
   */
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotalPrice"])
  },

  methods: {
    /**
     * Supprimer un  livre du panier
     * Vider le pan
     */
    ...mapActions(["removeBookFromCart", "clearCartItems"])
  }
};
</script>

<style scoped>
.minicart {
  min-width: 320px;
  right: 0;
  left: auto;
}
</style>
