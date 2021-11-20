<template>
  <div>
    <h1>ALLA KANALER</h1>
    <ChannelTeaserList :channelList="channels.channels" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {


  async asyncData({ $axios, $config }) {
    const channels = await $axios.$get(
      "/channels/?format=json&pagination=false"
    );

    return { channels };
  },



};
</script>
