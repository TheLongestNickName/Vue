import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        tittle: "Oil",
        image:
          "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        price: 79,
        length: 100,
        width: 2,
        category: "Oil",
      },
      {
        id: 2,
        tittle: "Camera",
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 219,
        length: 13,
        width: 3,
        category: "Camera",
      },
      {
        id: 3,
        tittle: "Makeup",
        image:
          "https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=",
        price: 34,
        length: 10,
        width: 51,
        category: "Makeup",
      },
      {
        id: 4,
        tittle: "Product 4",
        image:
          "https://img.freepik.com/free-photo/gua-sha-care-products-arrangement_23-2149322589.jpg",
        price: 57,
        length: 8,
        width: 78,
        category: "Product 4",
      },
      {
        id: 5,
        tittle: "Wrist watch",
        image: "https://fcity.in/images/products/200854917/hnd8w_256.jpg",
        price: 44,
        length: 109,
        width: 54,
        category: "Wrist watch",
      },
    ],
    price: {
      minPrice: null,
      maxPrice: null,
      minRange: null,
      maxRange: null,
      minPricePlaceholder: null,
      maxPricePlaceholder: null,
    },
    isFilterByPrice: false,
    isFilterByCategories: false,
    filteredProducts: [],
  },
  getters: {
    getAllProducts: (state) => state.products,
    getFiltereProducts: (state) => state.filteredProducts,
    getMaxPricePlaceholder: (state) => state.price.maxPricePlaceholder,
    getMinPricePlaceholder: (state) => state.price.minPricePlaceholder,
    getMinePrice: (state) => state.price.minPrice,
    getMaxPrice: (state) => state.price.maxPrice,
    getProduct: (state) => (id) =>
      state.products.filter((product) => product.id.toString() === id)[0],
    getMinMaxRange(state) {
      return {
        min: state.price.minRange,
        max: state.price.maxRange,
      };
    },
    getProducts(state) {
      if (state.isFilterByPrice || state.isFilterByCategories) {
        return state.filteredProducts;
      }
      return state.products;
    },
  },
  mutations: {
    setTotalMaxPrice(state, e) {
      if (parseInt(e.target.value) - 10 <= state.price.minPricePlaceholder) {
        e.target.value = state.price.minPricePlaceholder + 10;
      }
      state.price.maxPricePlaceholder = parseInt(e.target.value);
      if (state.price.maxRange > parseInt(e.target.value)) {
        state.price.maxPrice = parseInt(e.target.value);
      } else {
        state.price.maxPrice = null;
      }
    },
    setTotalMinPrice(state, e) {
      if (parseInt(e.target.value) + 10 >= state.price.maxPricePlaceholder) {
        e.target.value = state.price.maxPricePlaceholder - 10;
      }

      state.price.minPricePlaceholder = parseInt(e.target.value);
      if (state.price.minRange < parseInt(e.target.value)) {
        state.price.minPrice = parseInt(e.target.value);
      } else {
        state.price.minPrice = null;
      }
    },
    setPrices(state) {
      if (!(state.price.maxRange && state.price.minRange)) {
        let sortedbyMinPrice = state.products.sort((a, b) => {
          return b.price - a.price;
        });
        let min = sortedbyMinPrice[sortedbyMinPrice.length - 1].price;
        let max = sortedbyMinPrice[0].price;

        state.price.minRange = min;
        state.price.minPricePlaceholder = min;

        state.price.maxRange = max;
        state.price.maxPricePlaceholder = max;
      }
    },
    filterByPrice(state) {
      let min = state.price.minPrice;
      let max = state.price.maxPrice;
      state.isFilterByPrice = true;

      if (!min && !max) {
        state.isFilterByPrice = false;
        return;
      }

      state.filteredProducts = state.products.filter((product) => {
        return (
          product.price >= (min || state.price.minPricePlaceholder) &&
          product.price <= (max || state.price.maxPricePlaceholder)
        );
      });
    },
    filterByCategories(state, categoryes) {
      state.isFilterByCategories = true;

      if (!categoryes.length) {
        state.isFilterByCategories = false;
        return;
      }

      let filteredByCategory = state.products.filter((product) => {
        return categoryes.includes(product.category);
      });

      state.filteredProducts = filteredByCategory.filter((product) => {
        return (
          product.price >=
            (state.price.minPrice || state.price.minPricePlaceholder) &&
          product.price <=
            (state.price.maxPrice || state.price.maxPricePlaceholder)
        );
      });
    },
  },
});
