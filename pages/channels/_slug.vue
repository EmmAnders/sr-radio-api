<template>
  <div class="channel-page">
    <section class="channel-page-about row">
      <div class="media column">
        <img :src="channelInfo.channel.image" alt="" />
      </div>
      <div class="column">
        <h1>{{ channelInfo.channel.name }}</h1>
        <p>{{ channelInfo.channel.tagline }}</p>
        <p
          v-bind:style="{ color: `#${channelInfo.channel.color}` }"
          @click="TOGGLE_AUDIO_PLAYER"
        >
          Spelas just nu
        </p>
      </div>
      <Player
        v-if="showAudioPlayer"
        :audioSrc="channelInfo.channel.liveaudio.url"
      />
    </section>

    <Tabs :tabList="tabList">
      <template v-slot:tabPanel-1>
        <ProgramTeaserList :programList="channelPrograms.programs" />
      </template>
      <template v-slot:tabPanel-2>
        <ChannelScheduleList :schedule="channelSchedule.schedule" />
      </template>
    </Tabs>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

import { convertToDateObject } from "../../assets/js/utils.js";

export default {
  data: () => ({
    tabList: ["Program", "Dagens Tablå"],
  }),

  computed: {
    ...mapState(["showAudioPlayer"]),
  },

  async asyncData({ params, $axios, $config, ctx }) {
    const slug = params.slug;
    const channelPrograms = await $axios.$get(
      `programs/index?channelid=${slug}&format=json&pagination=false`
    );

    const channelInfo = await $axios.$get(`channels/${slug}?format=json`);

    const channelSchedule = await $axios.$get(
      `scheduledepisodes?channelid=${slug}&format=json&pagination=false`
    );

    /*  const schedule = await $axios.$get(
      `scheduledepisodes?channelid=${slug}&date=${this.getDate}`
    ); */

    return { channelPrograms, channelInfo, channelSchedule /* schedule */ };
  },

  methods: {
    ...mapMutations([
      "TOGGLE_AUDIO_PLAYER", // map `this.increment()` to `this.$store.commit('increment')`
    ]),
  },
};
</script>

<style lang="scss">
.channel-page {
  /*   @include container; */
  &-about {
    .media {
      img {
        width: 100%;
        height: auto;
      }

      @include medium {
        max-width: 200px;
        margin-right: $padding-m;
      }
    }
  }
}
</style>
