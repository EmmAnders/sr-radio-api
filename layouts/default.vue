<template>
  <div class="site-canvas">
    <SiteHeader />
    <SiteSidebar />

    <nuxt id="content" class="content-main site-canvas-content" />
    <!--       <SiteFooter /> -->
  </div>
</template>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}

.site-canvas {
  @include container;
  display: grid;
  grid-template-columns: 5% 95%;
  grid-template-areas:
    "header header"
    "sidebar main-content";

  @include medium {
    /*     grid-template-columns: 5% 95%; */
  }

  &-header {
    grid-area: header;
    margin-top: $padding-l;
  }

  &-content {
    grid-area: main-content;
  }

  &-sidebar {
    grid-area: sidebar;
    height: 100%;

    /* Typically, you wouldn't specify a height or min-height on this, instead allowing your actual content (i.e., text, images, etc.) to dictate the height of your content area. But since this example has very minimal content, I've set a min-height to mimic a taller content area. */
  }
}
</style>
