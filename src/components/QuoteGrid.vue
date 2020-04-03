<template>
  <div class="quote-grid">
    <div class="row d-flex justify-content-center">
      <Quote v-for="(quote, index) in quotes" :key="index" :quote="quote" @click.native="deleteQuote(index)"
        class="col-sm-5 col-md-4 col-lg-3"/>
    </div>
  </div>
</template>

<script>
import Quote from '@/components/Quote.vue'

export default {
  name: 'QuoteGrid',

  props: {
    quotes: Array
  },

  components: {
    Quote
  },

  methods: {
    deleteQuote (index) {
      this.$emit('deleteQuote', index)
    }
  }
}
</script>

<style scoped>
.row {
  margin: 0;
}

.quote-grid {
  background-color: #3F51B5;
}
</style>
