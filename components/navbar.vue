<script setup lang="ts">
import { toggleDark, isDark } from "~/composables/dark";
</script>

<template>
  <header class="header">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      Img
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <div
          class="icon-btn"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark()"
        >
          <div
            i="ic-outline-dark-mode dark:ic-outline-wb-sunny"
            class="text-xl"
            aria-hidden="true"
          />
        </div>
        <router-link to="/blog" title="Blog">
          <div class="i-line-md-pencil text-xl"></div>
        </router-link>
        <a
          href="https://twitter.com/patbirdme"
          target="_blank"
          title="Twitter"
          class="ext"
        >
          <div class="i-line-md-twitter text-xl"></div>
        </a>
        <a
          href="https://github.com/patrikbird"
          target="_blank"
          title="GitHub"
          class="ext"
        >
          <div class="i-line-md-github-loop text-xl"></div>
        </a>
        <a
          href="https://linkedin.com/in/patbirdme"
          target="_blank"
          title="LinkedIn"
          class="ext"
        >
          <div class="i-line-md-linkedin text-xl"></div>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: 1em;
  opacity: 0.6;
  outline: none;
}

.nav .right > *:hover {
  opacity: 1;
  transition: all 0.4s ease;
}

/* external link arrow */
.nav .ext:after,
.nav .ext:before {
  content: "";
  position: absolute;
  display: block;
  border: 0px solid transparent;
  width: 0%;
  height: 0%;
  transition: all 0.4s ease;
}
.nav .ext:after {
  width: 0%;
  height: 0%;
  top: 0;
  right: 0;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
}
.nav .ext:hover::before,
.nav .ext:hover::after {
  width: 10px;
  height: 10px;
  border-color: #121212;
}
</style>
