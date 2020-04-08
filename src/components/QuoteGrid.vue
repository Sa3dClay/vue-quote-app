<template>
  <div class="quote-grid">
    <form class="search">
      <div class="form-group row justify-content-center">
        <input class="form-control col-10 col-md-4 col-lg-3 text-center" type="text" placeholder="search for quote"
          v-model="filteredQuotes">
      </div>
    </form>
    <transition-group
      enter-active-class="animated rubberBand"
      leave-active-class="animated fadeOut"
      class="row d-flex justify-content-center"
    >
      <Quote v-for="(quote, index) in filterQuotes"
        :key="index+0" :quote="quote"
        @click.native="deleteQuote(index)"
        class="col-sm-5 col-md-4 col-lg-3"/>
    </transition-group>
  </div>
</template>

<script>
import Quote from '@/components/Quote.vue'
import { searchMixin } from '@/mixins/search.js'

export default {
  name: 'QuoteGrid',
  mixins: [
    searchMixin
  ],
  props: {
    quotes: Array
  },
  components: {
    Quote
  },
  data () {
    return {
      filteredQuotes: ''
    }
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
.search {
  padding: 20px 0;
  font-family: 'Caveat', cursive;
}
.search .form-control {
  border-radius: 0;
  font-size: 22px;
}
</style>
