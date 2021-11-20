<template>
  <div>
    <ul class="channel-list">
      <NuxtLink
        class="channel-list-item"
        v-for="(channel, index) in channelList"
        v-if="index < load"
        :key="channel.id"
        :to="`/channels/${channel.id}`"
      >
        <li>
          <ChannelTeaser :title="channel.name" :imageUrl="channel.image" />
        </li>
      </NuxtLink>
    </ul>
    <div class="load-more" v-if="load < channelList.length">
      <button @click="load += 10">Visa mer</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    channelList: {
      required: true,
    },
  },

  data() {
    return {
      load: 10,
    };
  },
};
</script>

<style lang="scss">
.channel-list {
  &-item {
  }
}

.load-more {
  @include flex-center;
  button {
    @include reset-button;
    @include button-primary;
  }
}
</style>
