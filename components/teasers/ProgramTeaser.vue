<template>
  <article class="program-teaser">
    <div class="program-teaser-image">
      <img :src="imageUrl" />
    </div>
    <div class="program-teaser-title">{{ title }}</div>

    <div class="program-teaser-action">Se alla episoder</div>
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
  },
};
</script>

<style lang="scss">
.program-teaser {
  @include flex-space-between;

  &-action {
    @include button-small;
  }

  &-image {
    display: none;

    @include medium {
      display: block;
      width: 5%;
      position: relative;

      &:before {
        content: "";
        display: block;
        width: 100%;
        padding-top: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        top: 0;
        left: 0;

        /*   -webkit-clip-path: polygon(
          50% 0,
          95% 25%,
          95% 75%,
          49% 100%,
          5% 75%,
          5% 25%
        );
        clip-path: polygon(50% 0, 95% 25%, 95% 75%, 49% 100%, 5% 75%, 5% 25%); */
      }
    }
  }
}
</style>
