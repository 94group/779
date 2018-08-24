<template>
  <div>home
    <input type="text" v-model="username">
    <input type="test" v-model="password">
    <button value="login" @click="login">登录</button>
  </div>
</template>
<script>
import {setCookie} from '@/config/util.js'
export default {
  data () {
    return {
      password: '',
      username: ''
    }
  },
  created () {
    setCookie('PHPSESSID', 1)
  },
  computed: {
    oid () {
      return this.$store.state.oid
    }
  },
  methods: {
    async login () {
      let data = {
        oid: this.oid,
        domain: 'www.668cp00.com',
        username: this.username,
        password: this.password
      }
      this.$axios.post('/user/signin', data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
