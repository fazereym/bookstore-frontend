<template>
<!-- START : Primary Color Toolbar -->
    <v-app-bar
        app
        color="primary"
        dark
    >
        <!-- START : Leftside Header -->
        <v-app-bar-nav-icon v-if="isHome" @click="setSideBar(!sideBar)">
        </v-app-bar-nav-icon>
        <v-btn v-if="!isHome" icon @click="$router.go(-1)">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <!-- END : Leftside Header -->

        <!-- START : Mid Header -->
        <v-toolbar-title class="white--text">Bookstore</v-toolbar-title>
        <!-- END : Mid Header -->

        <!-- START : Separator Header -->
        <v-spacer></v-spacer>
        <!-- END : Separator Header -->

        <!-- START : Rightside Header -->
        <v-btn icon>
            <v-badge left overlap color="orange">
                <span slot="badge" v-if="countCart > 0">{{ countCart }}</span>
                <span slot="badge" v-else>0</span>
                <v-icon>shopping_cart</v-icon>
            </v-badge>
        </v-btn>
        <!-- END : Rightside Header -->

        <!-- START : Search Input -->
        <v-text-field v-if="isHome" @click="search" slot="extension" hide-details append-icon="mic" text label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
        <!-- END : Search Input -->
    </v-app-bar>
<!-- END : Primary Color Toolbar -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'c-header',
    methods: {
        ...mapActions({
            setSideBar: 'setSideBar',
            setStatusDialog: 'dialog/setStatus',
            setComponent: 'dialog/setComponent'
        }),
        search() {
            this.setStatusDialog(true)
            this.setComponent('search')
            this.setSideBar(false)
        }
    },
    computed: {
        ...mapGetters({
            sideBar: 'sideBar',
            countCart: 'cart/count'
        }),
        isHome () {
            return (this.$route.path === '/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>