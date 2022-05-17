<template>
  <div class="home">
    <div class="head">
      <h2 class="title text-center">{{ 'Quote App' | toUpperCase }}</h2>
    </div>

    <Header :quoteCounter="quotes.length" :maxNofQuotes="maxQuotes"/>
    
    <NewQuote @newQuote="addQuote"/>
    
    <QuoteGrid :quotes="quotes" @deleteQuote="deleteQuote"/>

    <div class="row">
      <div class="col-12">
        <div class="alert alert-danger text-center" role="alert">Click on Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from '@/components/QuoteGrid.vue'
import NewQuote from '@/components/NewQuote.vue'
import Header from '@/components/Header.vue'

import Swal from 'sweetalert2'

export default {
  name: 'Home',
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase()
    }
  },
  data () {
    return {
      quotes: [],
      maxQuotes: 12
    }
  },
  methods: {
    addQuote (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        Swal.fire({
          title: `You can't create a new quote!`,
          text: `please delete some quotes.`,
          icon: 'info'
        })
      } else {
        if(quote.length <= 0) {
          Swal.fire({
            title: `Your quote is empty!`,
            text: `please type something.`,
            icon: 'info'
          })
        } else {
          this.quotes.push(quote)
          localStorage.setItem('quotes', this.quotes.toString())
        }
      }
    },
    deleteQuote (index) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#EF5350',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.quotes.splice(index, 1)
          localStorage.setItem('quotes', this.quotes)

          Swal.fire({
            title: 'Your quote has been deleted.',
            showConfirmButton: false,
            icon: 'success',
            timer: 1000
          })
        }
      })
    },
    getOldQuotes() {
      let oldQuotes = localStorage.getItem('quotes').split(',')
      this.quotes = oldQuotes
    }
  },
  created() {
    this.getOldQuotes()
  }
}
</script>

<style scoped>
.alert {
  font-family: 'Indie Flower', cursive;
  font-size: 22px;
  padding: 10px;
  margin: 0;
}
.head {
  padding-top: 40px;
  background-color: #3F51B5;
  color: #fff;
}
.head .title {
  margin: 0;
  font-family: 'Caveat', cursive;
}
</style>
