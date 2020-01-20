<template>
  <div class="centered-container">
    <label for="selector">
      Filter:
      <select v-model="select" id="selector">
        <option value="All" selected>All</option>
        <option value="Purchased" selected>Purchased</option>
        <option value="Unpurchased" selected>Unpurchased</option>
        <option value="One time purchases" selected>One time purchases</option>
        <option value="Subscriptions" selected>Subscriptions</option>
      </select>
    </label>
    <h1>SELECTED FILTER: {{ select }}</h1>
    <compProduct
      v-bind:title="product.title"
      v-bind:price="product.price"
      v-bind:descr="product.description"
      v-bind:discount="product.discount"
      v-bind:url="product.image"
      class="list-item"
      v-for="(product, idx) in products"
      :key="idx"
    >
    </compProduct>
  </div>
</template>
<style>
.centered-container {
  max-width: 1600px !important;
  margin: 0 auto;
  /*background-color: red;*/
}
.list-item {
  width: calc(25% - 20px);
  padding-top: 18.75%;
  position: relative;
  display: inline-block;
  background-color: #fff;
  margin-bottom: 10px;
  transition-duration: 0.5s;
  border-radius: 5px;
  margin: 7.5px !important;
  box-shadow: 0px 5px 10px #55555555;
}
@media only screen and (max-width: calc(1024px + 20px)) {
  .list-item {
    width: calc(calc(100% / 3) - 20px);
    padding-top: 25%;
    position: relative;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    margin: 7.5px !important;
  }
}
@media only screen and (max-width: calc(800px + 20px)) {
  .list-item {
    width: calc(50% - 20px);
    padding-top: 37.5%;
    position: relative;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    margin: 7.5px !important;
  }
}
@media only screen and (max-width: calc(00px + 20px)) {
  .list-item {
    width: calc(100% - 20px);
    padding-top: 75%;
    position: relative;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 5px;
    margin: 7.5px !important;
  }
}

.inner-image {
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.inner-text {
  text-align: left;
  font-family: arial;
  position: absolute;
  bottom: 0px;
  background-color: #000000cc;
  color: white;
  width: calc(100% - 10px);
  padding: 5px;
  border-radius: 0 0 5px 5px;
}
.inner-text p {
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
}
</style>

<script>
import compProduct from "../components/Product.vue";
const productItems = require("@/assets/products.json");
var noBlanks;
export default {
  name: "ProductList",
  components: {
    compProduct
  },
  computed: {
    products() {
      if (this.select == "All") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length; i += 1) {
          products.forEach((_, idx) => {
            if (idx == i) {
              products[i] = productItems[idx];
            }
          });
        }
        noBlanks = products.filter(function(i) {
          return i != null;
        });
        return noBlanks;
      }
      if (this.select == "Purchased") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length; i += 1) {
          products.forEach((_, idx) => {
            if (idx == i && productItems[i].purchased) {
              products[i] = productItems[idx];
            }
          });
        }
        noBlanks = products.filter(function(i) {
          return i != null;
        });
        return noBlanks;
      }
      if (this.select == "Unpurchased") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length; i += 1) {
          products.forEach((_, idx) => {
            if (idx == i && productItems[i].purchased == false) {
              products[i] = productItems[idx];
            }
          });
        }
        noBlanks = products.filter(function(i) {
          return i != null;
        });
        return noBlanks;
      }
      if (this.select == "One time purchases") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length; i -= -1) {
          products.forEach((_, idx) => {
            if (idx == i && productItems[i].type == "onetime") {
              products[i] = productItems[idx];
            }
          });
        }
        noBlanks = products.filter(function(i) {
          return i != null;
        });
        return noBlanks;
      }
      if (this.select == "Subscriptions") {
        let products = [...new Array(productItems.length)];
        for (let i = 0; i < productItems.length - 1; i -= -1) {
          products.forEach((product, idx) => {
            if (idx == i && productItems[i].type == "recurring") {
              products[i] = productItems[idx];
            }
          });
        }
        noBlanks = products.filter(function(i) {
          return i != null;
        });
        return noBlanks;
      }

      return "Product";
    }
  },
  data() {
    return {
      select: "All",
      selectedFilter: "All"
    };
  },
  watch: {
    select: function(oldVal, newVal) {
      this.selectedFilter = newVal;
    }
  }
};
</script>
