<template>
  <div v-if="hasProduct" class="m-5">
    <div class="mt-4">
      <h4 style="text-align: center">{{ product.tittle }}</h4>
      <b-card
        :img-src="product.image"
        img-width="600"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <div>
          <h4>Product details</h4>
        </div>
        <b-card-text>
          Some quick example text to build on the card and make up the bulk of
          the card's content.
        </b-card-text>
        <router-link :to="{ name: 'products' }">Back to products</router-link>
      </b-card>
    </div>
  </div>
  <app-e404 v-else title="Product not found"></app-e404>
</template>

<script>
import AppE404 from "@/components/ErrorPage";
import { mapGetters } from "vuex";

export default {
  components: {
    AppE404,
  },
  computed: {
    ...mapGetters(["getProduct"]),
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.getProduct(this.id);
    },
    hasProduct() {
      return this.product !== undefined;
    },
  },
};
</script>
