<template>
  <div style="position: relative">
    <x-header style="z-index: 2;background-color: rgba(0,0,0,0);"></x-header>
    <div style="background-color: slategray;height: 280px;position: absolute;top: 0px;z-index: 1;overflow: hidden">
      <div style="position: relative">
        <img :src="this.user.profile.backgroundUrl" width="100%"/>
        <flexbox orient="vertical" style="position: absolute;top: 80px;left: 10%">
          <flexbox-item style="position: relative">
            <img :src="this.user.profile.avatarUrl " width="60em" height="60em" style="border-radius: 30em"/>
            <x-button style="position: absolute;right: 6em;top: 1.8em;width: 6em;height: 3em;font-size: 0.8em"
                      text="编辑"
                      link="/menu/editUserInfo"></x-button>
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

        <table>
          <tr>
            <td><h4>个人信息</h4></td>
          </tr>
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
            <td>{{this.provinces.get(this.userInfo.profile.province)}}</td>
          </tr>
          <tr>
            <td>大学：</td>
            <td>{无法将id转换为文字</td>
          </tr>
          <tr>
            <td><h4>个人介绍</h4></td>
          </tr>
          <tr>
            <td>{{this.userInfo.profile.signature.length>0?this.userInfo.profile.signature:'还没有填写个人简介'}}</td>
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
  import {XHeader, Flexbox, FlexboxItem, Tab, TabItem, Group, Cell, XImg, XButton} from 'vux'
  import {mapGetters} from 'vuex'

  export default {
    name: 'myIndex',
    components: {
      XHeader, Flexbox, FlexboxItem,
      Tab, TabItem,
      Group, Cell, XImg, XButton
    },
    data: function () {
      return {
        index: 0,
        userInfo: {
          profile: {
            follows: 0,
            followeds: 0,
            signature: ''
          }
        },
        provinces: new Map([
          [110000, '北京市'],
          [120000, '天津市'],
          [130000, '河北省'],
          [140000, '山西省'],
          [150000, '内蒙古自治区'],
          [210000, '辽宁省'],
          [220000, '吉林省'],
          [230000, '黑龙江省'],
          [310000, '上海市'],
          [320000, '江苏省'],
          [330000, '浙江省'],
          [340000, '安徽省'],
          [350000, '福建省'],
          [360000, '江西省'],
          [370000, '山东省'],
          [410000, '河南省'],
          [420000, '湖北省'],
          [430000, '湖南省'],
          [440000, '广东省'],
          [450000, '广西壮族自治区'],
          [460000, '海南省'],
          [500000, '重庆市'],
          [510000, '四川省'],
          [520000, '贵州省'],
          [530000, '云南省'],
          [540000, '西藏自治区'],
          [610000, '陕西省'],
          [620000, '甘肃省'],
          [630000, '青海省'],
          [640000, '宁夏回族自治区'],
          [650000, '新疆维吾尔自治区'],
          [710000, '台湾省'],
          [810000, '香港特别行政区'],
          [820000, '澳门特别行政区']
        ])
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'isLogin',
        'myMusiclist',
        'localhost'
      ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if (vm.isLogin === false) {
          vm.$vux.toast.show({
            text: '未登录',
            type: 'warn',
          })
          vm.$router.push('/menu/login');
        }
        if (vm.myMusiclist.playlist.length > 0) return;
        vm.$ajax.get(vm.localhost+'/user/playlist', {params: {uid: vm.user.account.id || 0}})
          .then((rs) => {
            if (rs.data.code === 200) {
              vm.$store.dispatch('changemyMusiclist', rs.data.playlist);
            }
          })
        vm.$ajax.get(vm.localhost+'/user/detail', {params: {uid: vm.user.account.id || 0}})
          .then((rs) => {
            // if (rs.data.code === 200) {
            vm.userInfo = rs.data;
            // }
          })
      })
    },
    methods: {
      showPlayList: function (index) {
        this.$router.push({name: 'playListPage', params: {list: this.myMusiclist.playlist[index]}});
      }
    }
  }
</script>
