<template>
  <div class="list-item">
    <img class="inner-image" v-bind:src="url" />
    <div class="inner-text">
      <p>
        {{ title }}
      </p>
      <p v-if="varDiscount == null">£{{ price }}</p>
      <p v-else>
        £<span style="padding-right:25px; text-decoration:line-through;">{{
          price
        }}</span>
        £{{ varDiscountedPrice }}
      </p>
      <p style="font-size:75%; color:#aaa;">
        {{ descr }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "descr", "url", "discount"],
  name: "Product",
  data() {
    return {
      varDiscount: this.discount,
      varPrice: this.price,
      varDiscountedPrice:
        this.price - (parseFloat(this.discount) / 100.0) * this.price
    };
  }
};
</script>

<style lang="scss">
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
