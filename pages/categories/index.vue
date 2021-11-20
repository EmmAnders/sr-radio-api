<template>
  <div class="categories">
    <ul>
      <li v-for="category in categories.programcategories" :key="category.id">
        <NuxtLink :to="`/categories/${category.id}`">{{
          category.name
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $config }) {
    const categories = await $axios.$get(
      "/programcategories?format=json&pagination=false"
    );
    return { categories };
  },
};
</script>

<style lang="scss">
.categories {
  ul {
    width: 100%;
    @include medium {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
    }

    li {
      border: 1px solid white;
      display: block;
      margin-bottom: 1rem;
      height: 200px;

      a {
        @include flex-center;
        height: 100%;
        text-transform: uppercase;
      }
    }
  }
}
</style>
