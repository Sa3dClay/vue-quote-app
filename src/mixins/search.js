export const searchMixin = {
  computed: {
    filterQuotes () {
      return this.quotes.filter((el) => {
        return el.match(this.filteredQuotes.toLowerCase())
      })
    }
  }
}
