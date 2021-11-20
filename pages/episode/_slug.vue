<template>
  <div>
    <ul>
      <li v-for="e in episode.episode" :key="e.id">
        {{ e.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const slug = params.slug;
    const episode = await $axios.$get(
      `/episodes/get?id=${slug}&format=json&pagination=false`
    );

    console.log(episode);

    return { episode };
  },
};
</script>
