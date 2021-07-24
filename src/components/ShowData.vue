<template>
  <div class="hello">
    <h1>HELLO</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowData",
  created() {
    fetch("https://bio.torre.co/api/bios/josesanchez")
      .then(response => response.json())
      .then(data => console.log(data));

    const httpAxios = axios.create({
      params: {}
    });
    httpAxios
      .get("https://bio.torre.co/api/bios/josesanchez")
      .then(response => {
        console.log(response);
      });
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    httpAxios
      .post(
        "https://search.torre.co/opportunities/_search/?offset=1&size=5&aggregate=2",
        null,
        config
      )
      .then(response => {
        console.log(response);
      });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
