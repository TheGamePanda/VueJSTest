<template>
  <div class="home">
    <h1>Hello</h1>
    <p>Welcome to the code test.</p>
    <p>For this test, there's some things we would like you to do.</p>
    <p>
      1. Create a component for displaying a product in a list.
      <code>Product.vue</code>
    </p>
    <p>2. Use your component in <code>ProductList.vue</code>.</p>
    <p>
      3. Review the code in <code>ProductList.vue</code> and fix the bugs that
      exist.
    </p>
    <p>4. Add additional filters in <code>ProductList.vue</code></p>

    <h1>Acceptance Criteria</h1>

    <p>
      The product list must be responsive. <br />
      It should display 1 column at &lt;600px, <br />
      2 columns between 601px and 800px <br />
      3 columns between 801px and 1024px, <br />
      4 columns for&gt;1025px
    </p>
    <p>
      The page should be wrapped in a centered container with a max-width of
      1600px
    </p>
    <p>
      The options for filtering should be: <br /><code>All</code><br /><code
        >Purchased</code
      ><br /><code>Unpurchased</code><br /><code>One time purchases</code
      ><br /><code>Subscriptions</code>
    </p>
    <p>
      The <code>Product.vue</code> component should be able to handle the
      different types of product available. <br />
      If the product has discount, it should show the original price and the
      discounted price,
    </p>
    <p>The products should be displayed in the correct order</p>
    <p>
      A design for the <code>Product.vue</code> component has been put together
      and can be found here:
      <a
        href="https://www.figma.com/file/bdgMzCq95xv9fHTsVq1gNL/Untitled?node-id=0%3A1"
        target="_blank"
        >Figma</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
