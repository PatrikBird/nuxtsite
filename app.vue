<template>
  <Navbar></Navbar>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* @import url("./assets/main.css"); */
html {
  overflow: scroll;
  transition: background-color 0.3s;
  background-color: #fff;
  color: #121212;
}

html.dark {
  background: #121212;
  color: #fff;
}

a {
  color: #121212;
}

html.dark a {
  color: #fff;
}

main a {
  text-decoration: none;
  font-weight: inherit;
  position: relative;
}
main a::before {
  content: "";
  background-color: rgba(79, 192, 141, 0.5);
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 5px;
  z-index: -1;
  transition: all 200ms cubic-bezier(0, 0.8, 0.13, 1);
}
main a:hover::before {
  bottom: 0;
  height: 100%;
}
</style>
