<template>
  <div class="audio-control">
    <audio class="controls" controls>
      <source :src="audioSrc" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  props: ["audioSrc"],
};
</script>

<style lang="scss">
.audio-control {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: $padding-m;
  @include flex-center;

  .controls {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
