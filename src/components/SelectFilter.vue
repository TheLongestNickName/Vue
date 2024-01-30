<template>
  <div class="filter">
    <div class="">
      <span> Filters:</span>
      <PriceRange />
      <div class="form-check">
        <span class="form-check--select" @click="selectAll">Select all</span>
        <div v-for="(value, name) in tableClasess" v-bind:key="name">
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="tableClasess[name]"
            />
            {{ name }}
          </label>
        </div>
      </div>
      <button class="form-check--applay" @click="applyFilter">Apply</button>
    </div>
  </div>
</template>
<style lang="scss">
.filter {
  border-radius: 4px;
  border-left: none;
  box-shadow: 5px -3px 10px rgb(233, 225, 225);
  min-width: 14rem;
  display: flex;
  justify-content: center;
}
.form-check {
  &--select {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    text-decoration: underline;
  }
  &--applay {
    display: block;
    margin-top: 1rem;
  }
}
</style>
<script>
import PriceRange from "@/components/PriceRange.vue";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    alertType: "green",
    tableClasess: {
      Oil: false,
      Camera: false,
      Makeup: false,
      "Wrist watch": false,
    },
  }),
  methods: {
    ...mapMutations(["filterByCategories"]),
    applyFilter() {
      let categoryes = [];
      for (let key in this.tableClasess) {
        if (this.tableClasess[key]) {
          categoryes.push(key);
        }
      }
      this.filterByCategories(categoryes);
    },
    selectAll() {
      let categoryes = [];
      for (let key in this.tableClasess) {
        this.tableClasess[key] = !this.tableClasess[key];
        categoryes.push(this.tableClasess[key]);
      }

      if (
        categoryes.some((e) => {
          return e === true;
        })
      ) {
        for (let key in this.tableClasess) {
          this.tableClasess[key] = true;
        }
      }
    },
  },

  components: {
    PriceRange,
  },
};
</script>
