<template>
  <div class="program row">
    <ul class="column">
      <li v-for="e in episodesByProgram.episodes" :key="e.id">
        <!--         <NuxtLink :to="`/episode/${e.id}`"> -->
        <h2>{{ e.listenpodfile.title }}</h2>
        <p>{{ e.listenpodfile.duration }} - {{ e.publishdateutc }}</p>
        <!--       {{ e.name }}
          {{ e.listenpodfile.url }} -->
        <!--    </NuxtLink> -->
      </li>
    </ul>

    <div class="double-column">episode</div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const slug = params.slug;
    const episodesByProgram = await $axios.$get(
      `/episodes/index?programid=${slug}&format=json&pagination=false`
    );

    return { episodesByProgram };
  },
};
</script>

<style lang="scss">
.program {
  .double-column {
    background: orange;
  }
}
</style>
