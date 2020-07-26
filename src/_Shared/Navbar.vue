<template>
  <div class="mb-3">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="container">
        <div class="nav navbar-nav" id="nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
            <div @click="stopEvent">
              <MiniCart />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MiniCart from "./MiniCart";

export default {
  components: {
    MiniCart
  },

  computed: {
    ...mapGetters(["cartItemCount"])
  },

  methods: {
    stopEvent(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
