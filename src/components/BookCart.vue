<template>
  <div class="about container mt-5">
    <section class="text-center mt-5">
      <div class="container">
        <h1 class="h2 mt-5 mb-3">PANIER</h1>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Livre</th>
                  <th scope="col" class="text-left">Quantité</th>
                  <th scope="col" class="text-right">Prix</th>
                </tr>
              </thead>
              <tbody v-for="item in cart" :key="item.book.isbn">
                <tr>
                  <td>
                    <img :src="item.book.cover" />
                  </td>
                  <td>{{ item.book.title }}</td>
                  <td>{{ item.quantity }}</td>
                  <td class="text-right">
                    {{ item.book.price * item.quantity }} &euro;
                  </td>
                  <td>
                    <a
                      href=""
                      type="button"
                      @click.prevent="removeBookFromCart(item.book)"
                      ><i class="fas fa-trash-alt text-danger"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col" class="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-right">
                    <strong>{{ cartTotalPrice }} &euro;</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col mb-2">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-right">
              <button
                class="btn btn-block btn-success text-uppercase"
                @click.prevent="clearCartItems()"
              >
                Vider le panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
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
img {
  width: 80px;
  height: 120px;
}
</style>
