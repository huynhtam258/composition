<template>
  <div>
    <p>
      This is a composition component with with Vuex.<br />
      Store is propagated from the root component in the context.
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p><button @click="toggle">Toggle</button></p>
  </div>
</template>


<script>
import { getCurrentInstance } from 'vue';
import { useStoreFromParam } from './compostions/useStoreFromParam'
export default {
  setup() {
    const instance = getCurrentInstance()
    const store = instance.proxy.$root.$store
    return useStoreFromParam(store)
  }
};
</script>

<style>
</style>