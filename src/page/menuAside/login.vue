<template>
  <div>
    <link rel="stylesheet" href="/static/css/iconfont.css">
    <x-header>
      <template name="left">手机号登陆</template>
    </x-header>
    <group style="margin-top: 10%">
      <x-input v-model="phone" type="tel" placeholder="+86   请输入手机号" :min="11"
               :max="11"
               is-type="china-mobile">
        <i slot="label" class="iconfont icon-bofang"></i>
      </x-input>
      <x-input v-model="password" type="password" placeholder="请输入密码">
        <i slot="label" class="iconfont icon-bofang"></i>
        <a slot="right">忘记密码？</a>
      </x-input>
      <x-button style="width: 80%;margin-left: 10%;border-radius: 1em" text="登陆"
                type="warn"
                v-on:click.native="login"></x-button>
    </group>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import {XInput, Group, XButton, XHeader} from 'vux'
  import {mapActions} from 'vuex'

  export default {
    name: 'login',
    components: {
      XInput, Group, XButton, XHeader
    },
    data: function () {
      return {
        phone: "",
        password: ""
      }
    },
    methods: {
      ...mapActions([
        'changeuser'
      ]),
      login: function () {
        this.$vux.loading.show({
          text: 'Loading'
        })
        this.$ajax.get('http://localhost:3000/login/cellphone', {
          params: {
            phone: this.phone.trim(),
            password: this.password
          }
        }).then((rs) => {
          this.$store.dispatch('changeuser', rs.data);//a保存用户信息
          this.$vux.loading.hide();
          let msg = "";
          if (rs.data.code === 200) msg = "登陆成功"
          else msg = rs.data.msg;
          this.$vux.toast.show({
            text: msg,
            type: 'text'
          })
          if (rs.data.code === 200) {
            this.$router.push('/index/musicGround/recommend')
          }
        })
      }
    }
  }
</script>
