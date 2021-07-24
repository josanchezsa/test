<template lang="pug">
  v-app
    v-app-bar(app='' color='primary' dark='')
      .d-flex.align-center
        v-img.shrink.mr-2(alt='Vuetify Logo' contain='' src='./assets/icons/torre.png' transition='scale-transition' width='40')
        p Hola
        v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name' contain='' min-width='100' src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png' width='100')
      v-spacer
      v-btn(href='https://github.com/vuetifyjs/vuetify/releases/latest' target='_blank' text='')
        span.mr-2 Latest Release
        v-icon mdi-open-in-new
    v-main
      showData
</template>

<script>
import ShowData from './components/ShowData.vue';

export default {
  name: 'App',

  components: {
    ShowData
  },

  data: () => ({
    //
  }),
};
</script>
