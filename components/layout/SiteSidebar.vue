<template>
  <header class="site-canvas-sidebar">
    <nav class="site-canvas-sidebar-inner">
      <ul>
        <li v-for="(item, index) in navigation" :key="index">
          <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    navigation: [
      {
        name: "Kanaler",
        to: "/channels",
      },
      {
        name: "Radio Guide",
        to: "/",
      },

      {
        name: "Kategorier",
        to: "/categories",
      },
    ],
  }),
};
</script>

<style lang="scss">
a.nuxt-link-exact-active {
  color: #00c58e;
  position: relative;
  /*  text-decoration: underline;
  text-decoration-style: wavy;
 */
  /*  &::after {
    position: absolute;
    content: "";
    height: 2px;
    bottom: 9px;
    margin: 0 auto;
    left: -10%;
    right: 0;
    width: 120%;
    background: #00c58e;

    @include medium {
      bottom: 16px;
    }
  } */
}

.site-canvas-sidebar {
  &-inner {
    transform-origin: left top;
    transform: rotate(-90deg) translateX(-100%);
    position: fixed;
    left: $padding-m;
    top: 0;
    width: 100vh;

    @include large {
      left: $padding-xl;
    }

    ul {
      display: flex;
      align-items: center;
      width: 60%;
      margin: 0 auto;
      border: $border;

      border-radius: 50px;

      li {
        text-align: center;
        width: 100%;
        text-transform: uppercase;
        padding: 0.5rem;
      }
    }
  }
}
</style>
