<template>
<v-card>
    <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
        </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-container fluid>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" :cpunter="255" label="Name" required append-icon="person"></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required append-icon="email"></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="Password" required :append-icon="showPassword ? 'visibility' : 'visibility_off'" hint="At least 6 characters" counter @click:append="showPassword = !showPassword"></v-text-field>
            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do You Agree with our Privacy Policy?" required></v-checkbox>
            <div class="text-xs-center">
                <v-btn color="accent lighten-1" :disabled="!valid" @click="submit">
                    Submit
                    <v-icon right dark>person_add</v-icon>
                </v-btn>
                <v-btn @click="reset">clear</v-btn>
            </div>
        </v-form>
    </v-container>
</v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'register',
    data() {
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is Required',
                v => (v && v.length <= 255) || 'Name must be less than 255 characters'
            ],
            showPassword: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is Required',
                v => /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9]{2,}).([a-zA-Z0-9]{2,})+/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Name is Required',
                v => (v && v.length >= 6) || 'Min 6 Characters'
            ],
            checkbox: false
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
            setStatusDialog: 'dialog/setStatus',
            setAuth: 'auth/set'
        }),
        close() {
            this.setStatusDialog(false)
        },
        submit() {
            if(this.$refs.form.validate()) {
                const formData = new FormData
                formData.set('name', this.name)
                formData.set('email', this.email)
                formData.set('password', this.password)
                this.axios.post('/register', formData)
                    .then((resp) => {
                        const dataUser = resp.data.data
                        this.setAuth(dataUser)
                        this.setAlert({
                            status: true,
                            text: 'Register Success',
                            type: 'success'
                        })
                        this.close()
                    })
                    .catch((error) => {
                        console.log(error)
                        const resp = error.response
                        this.setAlert({
                            status: true,
                            text: resp.data.message,
                            type: 'success'
                        })
                    })
            }
        },
        reset() {
            this.$refs.form.reset()
        }
    }
}
</script>

<style lang="scss" scoped>

</style>