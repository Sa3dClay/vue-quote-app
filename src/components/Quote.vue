<template>
  <div class="quote">
    <div class="quote-content">
      <p class="text-center">{{ quote }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',

  props: {
    quote: String
  }
}
</script>

<style scoped>
.quote {
  padding: 22px;
}
.quote-content {
  font-family: 'Caveat', cursive;
  border: 2px solid #fff;
  color: #fff;
}
.quote-content:hover {
  cursor: pointer;
  background-color: #EF5350;
}
.quote-content p {
  font-size: 24px;
  padding: 10px 0;
  line-height: 2rem;
  margin: 0;
}
</style>
