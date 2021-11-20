<template>
  <ul class="program-list">
    <NuxtLink
      class="program-list-item"
      v-for="(program, index) in programList"
      v-if="index < load"
      :key="program.id"
      :to="`/programs/${program.id}`"
    >
      <li>
        <ProgramTeaser :title="program.name" :imageUrl="program.programimage" />
      </li>
    </NuxtLink>

    <div class="load-more" v-if="load < programList.length">
      <button @click="load += 10">Visa mer</button>
    </div>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    programList: {
      required: true,
    },
  },

  data() {
    return {
      load: 8,
    };
  },
};
</script>

<style lang="scss">
.program-list {
  &-item {
    width: 100%;
    border-top: 0.5px solid $color-light-grey;
    display: block;
    padding: $padding-l 0rem;
  }

  .load-more {
    @include flex-center;
    button {
      @include reset-button;
      @include button-primary;
    }
  }
}
</style>
