<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <section class="head_goback" v-if="goback" @click="$router.go(-1)">
      <span class="iconfont icon-back"></span>
    </section>
    <router-link :to="userinfo ? '/profile':'/login'" v-if='signin' class="head_login">
      <span v-if="userinfo" class="iconfont icon-user">kojihu</span>
      <mu-button color="primary" class="login_btn" v-else>登录注册</mu-button>
    </router-link>
    <section class="menu_head" v-if="userinfo">
      <span class="iconfont icon-menu" @click="menuOperation"></span>
    </section>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <section class="menu_drawer" v-show="open">
      <div class="mask" @click="menuOperation"></div>
      <ul class="alert_right" :class="[open ? 'right2': '']">
        <li>个人中心<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li>
        <li class="money"> 账户余额<span style="color: rgb(11, 118, 250);">￥0.00</span></li>
        <li>我要充值<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li>
        <li>我要提现<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li>
        <li>下注记录<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li>
        <li>开奖大厅<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li>
        <li>开奖音效 <input type="checkbox" id="ios-checkbox" name="emulate-ios-button" class="raw-checkbox"> <label for="ios-checkbox" class="emulate-ios-button"></label></li>
        <li>游戏规则<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li> <li> 联系我们<img src="//jkysxh.cn/img/wap/images/jiantou.png" alt=""></li> <li>退出</li>
      </ul>
    </section>
  </header>
</template>
<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'right'
    }
  },
  props: ['signin', 'headTitle', 'goback'],
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    }
  },
  methods: {
    menuOperation () {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss">
@import "../../style/mixin";
#head_top {
  background-color: #48618a;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 1.95rem);
}
.head_goback {
  left: 0.4rem;
  height: 1.95rem;
  line-height: 1.95rem;
  margin-left: 0.4rem;
  font-size: .8rem;
}
.head_login {
  right: 0.55rem;
  @include sc(0.65rem, #fff);
  @include ct;
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
    @include wh(0.8rem, 0.8rem);
  }
}
.menu_head {
  right: 0.8rem;
  @include sc(0.65rem, #fff);
  @include ct;
}
.title_head {
  @include call;
  width: 50%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    font-weight: bold;
  }
}
.login_btn {
  border-radius: 0.3rem;
  border: 0.1rem solid #4f76b1;
  padding: 0 0.4rem;
  height: 1.6rem;
  text-align: center;
  outline: none;
  font-size: 0.7rem;
  background-color: #4f76b1;
}
.alert_right {
  position: absolute;
  right: -8.7rem;
  top: 2.2rem;
  z-index: 11;
  background: #fff;
  color: #151515;
  border-radius: 0.2rem;
  transition: right 1s;
  li {
    width: 8.5rem;
    text-align: left;
    line-height: 1.5rem;
    font-size: .6rem;
    border-bottom: 1px solid #ccc;
    padding-left: 1.7rem;
  }
}
.right2 {
  right: 0.2rem;
}
.mask {
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  z-index: 10;
  top: 1.95rem;
}
.alert_right:before {
  content: "";
  width: 0;
  height: 0;
  border-bottom: .55rem solid #fff;
  border-right: .55rem solid transparent;
  border-left: .55rem solid transparent;
  border-top: .55rem solid transparent;
  position: absolute;
  right: .3rem;
  top: -1.1rem;
}
</style>
