<template>
  <div>
    <!-- START : Get Popular Category -->
    <v-container grid-list-md>
      <v-subheader>
        Random Category
        <v-spacer></v-spacer>
        <!-- Link to categories -->
        <router-link to="/categories">See All</router-link>
      </v-subheader>
      <v-layout row wrap>
        <!-- START : Loop Categories -->
        <v-flex v-for="(category, index) in categories" :key="index" xs6>
          <v-card :to="'/category/' + category.slug">
            <v-img
              :src="getImage('/categories/' + category.image)"
              height="150px"
            >
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <!-- category name -->
                    <span class="title white--text text-block" v-text="category.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <!-- START : Icon Dummy -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
            <!-- END : Icon Dummy -->
          </v-card>
        </v-flex>
        <!-- END : Loop Categories -->
      </v-layout>
    </v-container>
    <!-- END : Get Popular Category -->
    <v-container grid-list-md>
      <v-subheader>
        Top Books
        <v-spacer></v-spacer>
        <!-- Link to categories -->
        <router-link to="/books">See All</router-link>
      </v-subheader>
      <v-layout row wrap>
        <!-- START : Loop Categories -->
        <v-flex v-for="(book, index) in books" :key="index" xs6>
          <v-card :to="'/book/' + book.slug">
            <v-img
              :src="getImage('/books/' + book.cover)"
              height="150px"
            >
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <!-- category name -->
                    <span class="title white--text text-block" v-text="book.title"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>

            <!-- START : Icon Dummy -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
            <!-- END : Icon Dummy -->
          </v-card>
        </v-flex>
        <!-- END : Loop Categories -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      categories: [],
      books: []
    }
  },
  methods: {
    getRandomCategories(count = 0) {
      this.axios.get('/categories/random/' + count)
        .then((resp) => {
          const categories = resp.data.data
          this.categories = categories
        })
        .catch((error) => {
          const resp = error.response
          console.log(resp)
        })
    },
    getTopBooks(count = 0) {
      this.axios.get('/books/top/' + count)
        .then((resp) => {
          const books = resp.data.data
          this.books = books
        })
        .catch((error) => {
          const resp = error.response
          console.log(resp)
        })
    }
  },
  created() {
    this.getRandomCategories(4)
    this.getTopBooks(4)
  }
}
</script>

<style scoped>
.text-block {
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: black;
  padding-left: 5px;
  padding-right: 5px;
  opacity: 0.7;
  width: 100%;
}
</style>