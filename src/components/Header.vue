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
  font-family: 'Caveat', cursive;
  background-color: #3F51B5;
  position: relative;
  padding: 40px;
}
.progress {
  height: 1.5rem;
  border-radius: 0;
  overflow:visible;
  position: relative;
}
.progress .progress-bar {
  background-color: #EF5350;
  font-size: 22px;
}
.progress:before, .progress:after {
  content: '';
  position: absolute;
  width: 4em;
  height: 3px;
  background-color: inherit;
}
.progress:before {
  left: 4px;
  top: -4px;
}
.progress:after {
  right: 4px;
  bottom: -4px;
}
</style>
