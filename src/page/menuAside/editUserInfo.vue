<template>
  <div style="position: relative">
    <x-header></x-header>

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
    name: 'editUserInfo',
    components: {
      XHeader, Flexbox, FlexboxItem,
      Tab, TabItem,
      Group, Cell, XImg
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
        vm.$ajax.get(this.localhost+'/user/playlist', {params: {uid: vm.user.account.id || 0}})
          .then((rs) => {
            if (rs.data.code === 200) {
              vm.$store.dispatch('changemyMusiclist', rs.data.playlist);
            }
          })
        vm.$ajax.get(this.localhost+'/user/detail', {params: {uid: vm.user.account.id || 0}})
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
