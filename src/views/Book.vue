<template>
  <div class="about">
    <v-container grid-list-md>
        <v-subheader class="title">{{ book.title }}</v-subheader>
        <v-img v-if="book.cover" :src="getImage('/books/' + book.cover)" height="250px"></v-img>
        <v-subheader>Information</v-subheader>
        <table class="v-data-table">
            <tbody>
                <tr>
                    <th class="text-xs-left">
                        Author
                    </th>
                    <td>
                        {{ book.author }}
                    </td>
                </tr>
                <tr>
                    <th class="text-xs-left">
                        Publisher
                    </th>
                    <td>
                        {{ book.publisher }}
                    </td>
                </tr>
                <tr>
                    <th class="text-xs-left">
                        Price
                    </th>
                    <td v-if="book.price"> Rp.
                        {{ book.price.toLocaleString('id-ID') }}
                    </td>
                </tr>
                <tr>
                    <th class="text-xs-left">
                        Weight
                    </th>
                    <td>
                        {{ book.weight }} kg
                    </td>
                </tr>
                <tr>
                    <th class="text-xs-left">
                        Stock
                    </th>
                    <td>
                        {{ book.stock }}
                    </td>
                </tr>
                <tr>
                    <th class="text-xs-left">
                        Categories
                    </th>
                    <td>
                        <template v-for="(category) in book.categories">
                            {{ category.name }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
        <v-subheader>Description</v-subheader>
        <p class="body-2">{{ book.description }}</p>
        <p style="position: relative;">
            <v-btn block color="success" @click="buy" :disabled="book.stock == 0">
                <v-icon>save_alt</v-icon> &nbsp; BUY
            </v-btn>
        </p>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            book: {}
        }
    },
    methods: {
        ...mapActions({
            addCart: 'cart/add',
            setAlert: 'alert/set'
        }),
        buy() {
            this.addCart(this.book),
            this.setAlert({
                status: true,
                text: 'Added to cart',
                type: 'success'
            })
        },
        getBookData() {
            let slug = this.$route.params.slug
            let url = '/books/slug/' + slug
            this.axios.get(url)
                .then((resp) => {
                    const book = resp.data.data
                    this.book = book
                })
                .catch((error) => {
                    console.log(error.response)
                })

        }
    },
    created() {
        this.getBookData()
    }
};
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