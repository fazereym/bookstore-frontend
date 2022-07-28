<template>
<!-- START : Footer -->
    <v-footer dark height="auto" color="primary">
        <v-flex xs12>
            <v-card text tile class="white--text text-xs-center" color="primary">
            <!-- START : Socmed Account -->
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
            <!-- END : Socmed Account -->
            <v-layout justify-center row wrap>
                <!-- START : Link Menu App -->
                <v-btn v-for="link in links" :key="link" color="white" text rounded>
                    {{ link }}
                </v-btn>
                <!-- END : Link Menu App -->
                <!-- START : Copyright text -->
                <v-flex py-3 white--text xs12 text-center color="primary">
                    &copy;2020 - Bookstore powered by <strong>Vuetify</strong>
                </v-flex>
                <!-- END : Copyright text -->
            </v-layout>
            </v-card>
        </v-flex>
    </v-footer>
<!-- END : Footer -->
</template>

<script>
export default {
    name: 'c-footer',
    data() {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram',
            ],
            links: [
                'Home',
                'About Us',
                'Team',
                'Service',
                'Blog',
                'Contact Us'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>