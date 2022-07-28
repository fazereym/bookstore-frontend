<template>
  <v-app>
    <c-sidebar></c-sidebar>
    <c-header></c-header>
    <v-main>
      <router-view/>
    </v-main>
    <c-footer></c-footer>
    <c-alert></c-alert>
    <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
      <search/>
    </v-dialog> -->
    <keep-alive>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
        <component :is="currentComponent"></component>
      </v-dialog>
    </keep-alive>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CHeader from '@/components/CHeader.vue';
import CSidebar from '@/components/CSidebar.vue';
import CFooter from '@/components/CFooter.vue';
import CAlert from '@/components/CAlert.vue';
import Search from '@/views/Search.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';


export default {
  name: 'App',
  components: {
    CHeader,
    CSidebar,
    CFooter,
    CAlert,
    Search,
    Login,
    Register
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions({
      setStatusDialog: 'dialog/setStatus'
    })
  },
  computed: {
    ...mapGetters({
      statusDialog: 'dialog/status',
      currentComponent: 'dialog/component'
    }),
    dialog: {
      get() {
        return this.statusDialog
      },
      set(value) {
        this.setStatusDialog(value)
      }
    }
  }
};
</script>

<style>
.v-toolbar {
  flex: 0 !important;
}

.v-application.py-3 {
  text-align: center !important;
}

.v-card__text {
  text-align: center !important;
}
</style>