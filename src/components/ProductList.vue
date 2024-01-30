<template>
  <div class="product">
    <h1 class="product__tittle">Products</h1>
    <div class="product__wrap">
      <SelectFilter />
      <div style="width: 100%; height: 100%">
        <div class="product__card">
          <div
            class="col col-sm-4 mb-3"
            v-for="product in getProducts"
            :key="product.id"
          >
            <div class="card m-2">
              <div class="card-body" style="">
                <h3 style="text-align: center">{{ product.tittle }}</h3>
                <img
                  style="width: 100%; max-height: 20rem; cursor: pointer"
                  :src="product.image"
                  alt=""
                  @click="goTo(product.id)"
                />
                <div>Price {{ product.price }}$</div>
                <router-link
                  style="
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                  "
                  :to="`/product/${product.id}`"
                  >Read more</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product {
  min-height: 60rem;
  background: #f6f6f6;
  margin: 2rem;
  overflow: hidden;
  height: 100%;
  &__tittle {
    text-align: center;
  }
  &__card {
    box-shadow: 5px -3px 10px rgb(233, 225, 225);
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
  }
  &__wrap {
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
}
</style>
<script>
import SelectFilter from "@/components/SelectFilter.vue";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getProducts"]),
  methods: {
    goTo(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  components: {
    SelectFilter,
  },
  created() {},
};
</script>
