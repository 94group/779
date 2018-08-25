<template>
  <div>
    <head-top goback="true" head-title="用户登录"></head-top>
    <section class="login_container">
      <div class="logo"></div>
      <div class="login_form">
        <div class="form_item">
          <span class="iconfont icon-user-reg"></span>
          <input type="text" v-model="username" placeholder="用户账号">
        </div>
        <div class="form_item">
          <span class="iconfont icon-pass"></span>
          <input :type="[hidePass ? 'icon-closeeye': 'icon-openeye']" v-model="password" placeholder="用户密码">
          <span class="iconfont" :class="[hidePass ? 'icon-closeeye': 'icon-openeye']" @click="hidePass = !hidePass"></span>
        </div>
      </div>
    </section>
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
      password: '',
      username: '',
      hidePass: true
    }
  },
  components: {
    AlertTip,
    HeadTop
  },
  methods: {
    login () {
      let data = {
        oid: this.oid,
        domain: 'www.668cp00.com',
        username: this.username,
        password: this.password
      }
      this.$axios.post('/user/signin', data).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.login_container {
  padding: 1.95rem 0.8rem 0 0.8rem;
  .logo {
    @include wh(12rem, 4rem);
    margin: 1rem auto 1rem;
    @include backimg("../../../static/img/94club.png");
  }
  .form_item {
    border-bottom: 1px solid #ccc;
    line-height: px2rem(120);
    position: relative;
    .icon-closeeye, .icon-openeye {
      @include ct;
      font-size: 1.5rem;
    }
    .icon-user-reg, .icon-pass {
      @include ct;
      color: #2196f3;
      font-size: 1.5rem;
      color:#999;
    }
    input {
      padding: 0;
      width: 12rem;
      line-height: px2rem(120);
      background-color: #fff;
      padding-left: 2rem;
      border: none;
      margin: 0;
      outline: none;
      color: #333;
      [data-dpr="2"] &{
        font-size: 24px;
      }
      [data-dpr="3"] &{
        font-size: 36px;
      }
    }
  }
}
</style>
