<template>
  <div class="quote-grid">
    <div class="row justify-content-center text-center">
      <form class="col-sm-10 col-md-8 col-lg-6">
        <div class="form-group">
          <label for="quote-input">New Quote</label>
          <textarea id="quote-input" rows="3" cols="44" maxlength="80" class="form-control" v-model="quote"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="supmit" @click.prevent="AddQuote">Add Quote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewQuote',
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    AddQuote () {
      this.$emit('newQuote', this.quote.toLowerCase())
      this.quote = ''
    }
  }
}
</script>

<style scoped>
.row {
  margin: 0;
}
.quote-grid {
  padding: 40px;
  font-size: 22px;
  font-family: 'Indie Flower', cursive;
  background-color: #ecf0f1;
}
.quote-grid textarea {
  font-size: 22px;
}
.btn {
  padding: 10px;
}
textarea {
  resize: none;
}
</style>
