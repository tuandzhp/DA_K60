<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>
<script>
import axios from 'axios'
window.axios = axios;

export default {
  methods: {
    login() {
      axios.post('https://developer.api.autodesk.com/authentication/v1/authenticate', {
        client_id: 'Ab2HsnptzXAbqpU8xNMG6nLpZGtnRyfS',
        client_secret: 'Kc8535009044f46f',
        grant_type: 'client_credentials',
        scope: 'data:read data:write',
      })
      .then(response => {
        // Store the access token in a cookie or Vuex store for later use
        console.log(response.data.access_token);
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
}
</script>
