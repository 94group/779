<template>
  <div>
    <head-top goback="true" head-title="新用户注册"></head-top>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText" :className="className"></alert-tip>
  </div>
</template>
<script>
import AlertTip from '@/components/common/AlertTip'
import HeadTop from '@/page/head/HeadTop'
export default {
  data () {
    return {
      showAlert: false,
      alertText: null,
      className: '',
      username: '',
      password: '',
      confirmPass: '',
      realname: ''
    }
  },
  components: {
    AlertTip,
    HeadTop
  },
  methods: {
    register () {
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
