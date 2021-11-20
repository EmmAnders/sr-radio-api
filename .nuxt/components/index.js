export { default as Player } from '../../components/fragments/Player.vue'
export { default as Tabs } from '../../components/fragments/Tabs.vue'
export { default as SiteFooter } from '../../components/layout/SiteFooter.vue'
export { default as SiteHeader } from '../../components/layout/SiteHeader.vue'
export { default as SiteLogo } from '../../components/layout/SiteLogo.vue'
export { default as SiteSidebar } from '../../components/layout/SiteSidebar.vue'
export { default as ChannelScheduleList } from '../../components/lists/ChannelScheduleList.vue'
export { default as ChannelTeaserList } from '../../components/lists/ChannelTeaserList.vue'
export { default as ProgramTeaserList } from '../../components/lists/ProgramTeaserList.vue'
export { default as ChannelTeaser } from '../../components/teasers/ChannelTeaser.vue'
export { default as ProgramTeaser } from '../../components/teasers/ProgramTeaser.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
