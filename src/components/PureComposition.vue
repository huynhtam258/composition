<template>
  <div>
    <p>
      This is a composition component with with <code>ref</code> state.<br />
      Vuex state synchronized via Vuex plugin.
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p>
      <button @click="toggle">Toggle</button>
    </p>
  </div>
</template>

<script>
import { useRef } from "./compostions/useRef";
export default {
  setup() {
    return useRef();
  },
};
</script>

<style>
</style>