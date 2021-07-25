<template lang="pug">
  v-app
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
  }),
};
</script>
<style>
@font-face {
  font-family: "Montserrat-bold";
  src: local("Montserrat-bold"),
  url(./fonts/Montserrat-Bold.ttf) format("truetype");
}  
@font-face {
  font-family: "Montserrat-semibold";
  src: local("Montserrat-semibold"),
  url(./fonts/Montserrat-SemiBold.ttf) format("truetype");
}  
.description{
  font-family: "Montserrat-semibold";
  font-size: 25px;
}
</style>