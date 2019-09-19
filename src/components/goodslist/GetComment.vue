<template>
  <div class="getcomment-container">
    <comment :id="id"></comment>
  </div>
</template>

<script>
import comment from "../subcomponents/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {},
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
.getcomment-container {
  padding: 0 5px;
}
</style>