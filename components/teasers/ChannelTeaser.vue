<template>
  <article class="channel-teaser">
    <div class="channel-teaser-image">
      <img :src="imageUrl" />
    </div>
    <div class="channel-teaser-action">
      <p v-bind:style="{ color: `#${channelColor}` }">dsa</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      required: true,
    },

    channelColor: {
      required: false,
    },
    audioSrc: {
      required: false,
    },
  },
};
</script>

<style lang="scss">
.channel-teaser {
  &-image {
    @include medium {
    }
  }
}
</style>
