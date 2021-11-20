<template>
  <div class="category">
    <ul v-for="c in category" :key="c.id">
      <li>
        <NuxtLink :to="``"> {{ c.name }}</NuxtLink>
      </li>
    </ul>

    <ul class="category-programs">
      <li v-for="p in programs.programs" :key="p.id">
        <NuxtLink :to="`/programs/${p.id}`">
          <ProgramTeaser :title="p.name" :imageUrl="p.programimage"
        /></NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const slug = params.slug;
    const category = await $axios.$get(
      `programcategories/${slug}?format=json&pagination=false`
    );

    const programs = await $axios.$get(
      `programs/index?programcategoryid=${slug}&format=json&pagination=false`
    );

    return { category, programs };
  },
};
</script>

<style lang="scss">
.category {
  .category-programs {
    li {
      border-top: 0.5px solid $color-light-grey;
      display: block;
      padding: $padding-l 0rem;
    }
  }
}
</style>
