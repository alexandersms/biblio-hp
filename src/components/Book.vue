<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
      <img class="card-img" :src="book.cover" />
      <div class="card-body">
        <h4 class="card-title h2">{{ book.title }}</h4>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">{{ book.price }} &euro;</h5>
          </div>
          <a href="#" class="btn btn-danger mt-3"
            ><i class="fas fa-shopping-cart"></i> Ajouter au panier</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["book"]
};
</script>

<style scoped></style>
