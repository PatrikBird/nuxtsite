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
        <router-link to="/blog" title="Blog">
          <div class="i-line-md-pencil text-xl"></div>
        </router-link>
        <a href="https://twitter.com/patbirdme" target="_blank" title="Twitter">
          <div class="i-line-md-twitter text-xl"></div>
        </a>
        <a href="https://github.com/patrikbird" target="_blank" title="GitHub">
          <div class="i-line-md-github-loop text-xl"></div>
        </a>
        <a
          href="https://linkedin.com/in/patbirdme"
          target="_blank"
          title="LinkedIn"
        >
          <div class="i-line-md-linkedin text-xl"></div>
        </a>
        <button
          type="button"
          class="icon-btn"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark()"
        >
          <div
            i="ic-outline-dark-mode dark:ic-outline-wb-sunny"
            class="text-xl"
            aria-hidden="true"
          />
        </button>
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
}

.nav a {
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: 1em;
  opacity: 0.6;
  outline: none;
}
.nav a:hover {
  opacity: 1;
}

.nav a:after,
.nav a:before {
  content: "";
  position: absolute;
  display: block;
  border: 0px solid transparent;
  width: 0%;
  height: 0%;
  transition: all 0.3s ease;
}

.nav a:after {
  width: 0%;
  height: 0%;
  top: 0;
  left: 0;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
}

.nav a:before {
  width: 0%;
  height: 0%;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
}

.nav a:hover::before,
.nav a:hover::after {
  width: 10px;
  height: 10px;
  border-color: #222;
}
</style>
