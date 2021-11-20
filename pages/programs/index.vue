<template>
  <div>
    <h1>ALLA PROGRAM</h1>
    <ul v-for="program in programs.programs" :key="program.id">
      <li>
        <NuxtLink :to="`programs/${program.id}`">
          {{ program.name }} {{ program.id }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const slug = params.slug;
    const programs = await $axios.$get(
      `programs?&format=json&pagination=false`
    );
    console.log(programs);

    return { programs };
  },
};
</script>
