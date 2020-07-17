<template>
  <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <span class="display-1 d-block">404</span>
          <div class="mb-4 lead">
            La page que vous recherchez est introuvable.
          </div>
          <router-link to="/">retour à la page d'accueil</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404Error"
};
</script>

<style scoped>
.page-wrap {
  min-height: 85vh;
}
</style>
