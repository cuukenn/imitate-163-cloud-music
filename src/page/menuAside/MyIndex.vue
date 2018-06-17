<template>
  <div style="position: relative">
    <x-header style="z-index: 2;background-color: rgba(0,0,0,0);"></x-header>
    <div style="background-color: slategray;height: 280px;position: absolute;top: 0px;z-index: 1;overflow: hidden">
      <div style="position: relative">
        <img :src="this.user.profile.backgroundUrl" width="100%"/>
        <flexbox orient="vertical" style="position: absolute;top: 80px;left: 10%">
          <flexbox-item>
            <img :src="this.user.profile.avatarUrl " width="60em" height="60em" style="border-radius: 30em"/>
          </flexbox-item>
          <flexbox-item style="color: white;font-size: 2em">
            <p v-text="this.user.profile.nickname"></p>
          </flexbox-item>
          <flexbox-item style="color: white;font-size: 1em">
            <template>
              <pre style="float: left">关注 {{this.userInfo.profile.follows}}     |</pre>
              <pre style="float: left">     粉丝 {{this.userInfo.profile.followeds}}</pre>
            </template>
          </flexbox-item>
          <flexbox-item style="color: white;font-size: 1em;width: 100%">
            <template>
              <div class="styleLabel">95后</div>
              <div class="styleLabel">LV.7</div>
              <div class="styleLabel">南昌市</div>
              <div class="styleLabel">处女座</div>
            </template>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div style="position: absolute;top:280px;width: 100%;z-index: 3">
      <tab bar-position="top" :animate="true">
        <tab-item selected @on-item-click="index=0">音乐</tab-item>
        <tab-item @on-item-click="index=1">动态</tab-item>
        <tab-item @on-item-click="index=2">关于我</tab-item>
      </tab>
      <Group title="歌单" v-show="this.index===0">
        <cell :title="item.name" @click.native="showPlayList(index)" v-for="(item,index) in myMusiclist.playlist"
              :key="index">
          <x-img slot="icon" :default-src="item.coverImgUrl" style="width: 28px"></x-img>
        </cell>
      </Group>
      <div v-show="this.index===2">
        <h4>个人信息</h4>
        <table>
          <tr>
            <td>等级：</td>
            <td>{{this.userInfo.level}}</td>
          </tr>
          <tr>
            <td>年龄：</td>
            <td>{{new Date().getFullYear()- new Date(this.userInfo.profile.birthday).getFullYear()}}
            </td>
          </tr>
          <tr>
            <td>性别：</td>
            <td>{{this.userInfo.profile.gender===1?'男':'女'}}</td>
          </tr>
          <tr>
            <td>地区：</td>
            <td>无法将id转换为文字</td>
          </tr>
          <tr>
            <td>大学：</td>
            <td>{无法将id转换为文字</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .styleLabel {
    height: 100%;
    border-radius: 1.4em;
    float: left;
    margin-right: 1em;
    font-size: 0.6em;
    background-color: lightskyblue;
  }
</style>
<script>
  import {XHeader, Flexbox, FlexboxItem, Tab, TabItem, Group, Cell, XImg} from 'vux'
  import {mapGetters} from 'vuex'

  export default {
    name: 'myIndex',
    components: {
      XHeader, Flexbox, FlexboxItem,
      Tab, TabItem,
      Group, Cell, XImg
    },
    data: function () {
      return {
        index: 0,
        userInfo: {}
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'isLogin',
        'myMusiclist'
      ])
    },
    mounted: function () {
      if (this.isLogin === false) {
        this.$vux.toast.show({
          text: '未登录',
          type: 'warn',
        })
        this.$router.push('/menu/login');
      }
      if (this.myMusiclist.playlist.length > 0) return;
      this.$ajax.get('http://localhost:3000/user/playlist', {params: {uid: this.user.account.id}})
        .then((rs) => {
          if (rs.data.code === 200) {
            this.$store.dispatch('changemyMusiclist', rs.data.playlist);
          }
        })
      this.$ajax.get('http://localhost:3000/user/detail', {params: {uid: this.user.account.id}})
        .then((rs) => {
          // if (rs.data.code === 200) {
          console.log(rs);
          this.userInfo = rs.data;
          // }
        })
    },
    methods: {
      showPlayList: function (index) {
        this.$router.push({name: 'playListPage', params: {list: this.myMusiclist.playlist[index]}});
      }
    }
  }
</script>
