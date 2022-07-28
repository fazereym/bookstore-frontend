<template>
<div>
    <!-- START : Get Popular Category -->
    <v-container grid-list-md>
      <v-subheader>
        All Category
        <v-spacer></v-spacer>
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
    <!-- START : Pagination -->
    <template>
        <div class="text-xs-center">
            <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="4"></v-pagination>
        </div>
    </template>
    <!-- END : Pagination -->
  </div>
</template>

<script>

export default {
    data() {
        return {
            categories: [],
            page: 0,
            lengthPage: 0
        }
    },
    methods: {
        go() {
            let url = '/categories'
            if(this.page > 0) url = '/categories?page=' + this.page
            this.axios.get(url)
                .then((resp) => {
                    const respData = resp.data
                    const categories = respData.data
                    this.lengthPage = respData.meta.last_page
                    this.categories = categories
                })
                .catch((error) => {
                    console.log(error.response)
                })
        }
    },
    created() {
        this.go()
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