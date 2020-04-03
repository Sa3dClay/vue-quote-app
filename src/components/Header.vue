<template>
  <div class="header">
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
        :style="{width: (quoteCounter / maxNofQuotes) * 100 + '%'}">
        {{ quoteCounter + '/' + maxNofQuotes }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  props: {
    quoteCounter: Number,
    maxNofQuotes: Number
  }
}
</script>

<style scoped>
.header {
  background-color: #3F51B5;
  padding: 40px;
}
.progress {
  height: 1.4rem;
  border-radius: 1rem;
}
.progress .progress-bar {
  background-color: #EF5350;
}
</style>
