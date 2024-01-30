<template>
  <div class="price-block">
    <span>Price</span>
    <div class="price-slider">
      <input
        type="range"
        :min="getMinMaxRange.min"
        :max="getMinMaxRange.max"
        step="5"
        :value="getMinPricePlaceholder"
        @input="setTotalMinPrice"
      />
      <input
        type="range"
        :min="getMinMaxRange.min"
        :max="getMinMaxRange.max"
        step="5"
        :value="getMaxPricePlaceholder"
        @input="setTotalMaxPrice"
      />
    </div>
    <div class="price-input">
      <input
        type="text"
        maxlength="3"
        :placeholder="getMinPricePlaceholder"
        :value="getMinePrice"
        @change="setTotalMaxPrice"
      />
      -
      <input
        type="text"
        maxlength="3"
        :placeholder="getMaxPricePlaceholder"
        :value="getMaxPrice"
        @change="setTotalMaxPrice"
      />
      -
      <button @click="filterByPrice">Ok</button>
    </div>
  </div>
</template>

<style lang="scss">
.price-block {
  margin-top: 1.5rem;
  position: relative;
}
.price-slider {
  padding-top: 1rem;
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    height: 1rem;
    position: absolute;
    top: 2rem;
    width: 11.5rem;
  }

  input[type="range"]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    margin-top: -8px;
    background-color: #3093e0;
    height: 1rem;
    border-radius: 50%;
    width: 1rem;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: #3093e0;
    height: 3px;
  }
}
.price-input {
  margin-top: 1rem;
  input {
    width: 4rem;
    text-align: center;
  }
}
</style>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters([
    "getMinMaxRange",
    "getMaxPricePlaceholder",
    "getMinPricePlaceholder",
    "getMinePrice",
    "getMaxPrice",
  ]),
  methods: {
    ...mapMutations([
      "setPrices",
      "setTotalMaxPrice",
      "setTotalMinPrice",
      "filterByPrice",
    ]),
    sortByCategories() {
      let vm = this;

      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
    },
  },

  created() {
    this.setPrices();
  },
};
</script>
