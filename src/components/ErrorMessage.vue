<template>
  <div class="error-message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.error-message {
  color: #e74c3c;
  padding: 10px;
  border: 1px solid #e74c3c;
  border-radius: 4px;
  background-color: #fadbd8;
}
</style>