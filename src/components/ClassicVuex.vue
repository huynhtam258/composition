<template>
  <div>
    <p>
      This is a classic Vue component using the Vuex store
    </p>
    <p>
      Awesomeness is <strong>{{ awesomeness }}</strong>
    </p>
    <p><button @click="toggle">Toggle</button></p>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(["awesomeness"]),
  methods: {
    toggle () {{
      this.$store.commit('toggleAwesomeness');
    }}
  }
}
</script>
