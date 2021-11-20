<template>
  <ul class="channel-schedule-list">
    <li v-for="program in schedule" :key="program.id">
      <div class="channel-schedule-list-times">
        {{ convertDate(program.starttimeutc) }} -
        {{ convertDate(program.endtimeutc) }}
      </div>
      <div>{{ program.program.name }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    schedule: {
      required: true,
    },
  },
  methods: {
    convertDate(item) {
      let date = new Date(
        // eslint-disable-next-line no-useless-escape
        parseInt(item.replace(/[\/\(\)date]/gi, ""))
      ).toLocaleString();

      let newStr = date.split(" ").slice(1).join(" ");

      let today = new Date();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      return newStr;
    },
  },
};
</script>

<style lang="scss">
.channel-schedule-list {
  li {
    border-top: 0.5px solid $color-light-grey;
    padding: $padding-m 0rem;
    @include medium {
      @include flex-space-between;
      padding: $padding-s 0rem;
    }
  }
}
</style>
