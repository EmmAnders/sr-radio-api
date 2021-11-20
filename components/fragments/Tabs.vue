<template>
  <section class="tabs">
    <ul class="tabs-options">
      <li v-for="(tab, index) in tabList" :key="index">
        <label
          v-bind:style="
            index + 1 === activeTab
              ? 'background: white; color:#2b2a2a'
              : 'background: none;'
          "
          :for="`${_uid}${index}`"
          v-text="tab"
        ></label>
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
        />
      </li>
    </ul>

    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    /*   variant: {
      type: String,
      required: false,
      default: () => "vertical",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    }, */
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>

<style lang="scss">
.tabs {
  &-options {
    @include flex-center;
    li {
      margin-bottom: $padding-m;
      input[type="radio"] {
        opacity: 0;
      }

      label {
        @include button-primary;
      }
    }
  }
}
</style>
