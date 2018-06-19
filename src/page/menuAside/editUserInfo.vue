<template>
  <div style="position: relative">
    <x-header></x-header>
    <!--<group>-->
      <!--<x-input title="昵称" v-model="userInfo.nickname"></x-input>-->
      <!--&lt;!&ndash;<selector title="性别" :options="gender"></selector>&ndash;&gt;-->
      <!--<x-input title="性别" v-model="userInfo.gender"></x-input>-->
      <!--<datetime-range title="生日" v-model="userInfo.birthday" start-date="1900-01-01"-->
                      <!--end-date="2099-01-01"></datetime-range>-->
      <!--<x-input title="生日" v-model="userInfo.birthday"></x-input>-->
      <!--<x-input title="省份" v-model="userInfo.province"></x-input>-->
      <!--<x-input title="个人签名" v-model="userInfo.signature"></x-input>-->
    <!--</group>-->
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
  import {XHeader, Flexbox, FlexboxItem, Tab, TabItem, Group, Cell, XImg, XInput, Selector, DatetimeRange} from 'vux'
  import {mapGetters} from 'vuex'

  export default {
    name: 'editUserInfo',
    components: {
      XHeader, Flexbox, FlexboxItem,
      Tab, TabItem,
      Group, Cell, XImg, XInput, Selector, DatetimeRange
    },
    data: function () {
      return {
        userInfo: {
          gender: 0,
          birthday: '',
          nickname: '',
          province: '',
          signature: ''
        },
        gender: [{0: '保密', 1: '男性', 2: '女性'}],
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
        'user'
      ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.userInfo.gender = vm.user.profile.gender === 1 ? '男' : '女';
        let obj = [];
        let date = new Date(vm.user.profile.birthday);
        obj.push(date.getFullYear());
        obj.push(date.getMonth());
        obj.push(date.getDate());
        vm.userInfo.birthday = obj;
        vm.userInfo.nickname = vm.user.profile.nickname;
        vm.userInfo.province = vm.provinces.get(vm.user.profile.province);
        vm.userInfo.signature = vm.user.profile.signature
      })
    },
    methods: {
      showPlayList: function (index) {
        this.$router.push({name: 'playListPage', params: {list: this.myMusiclist.playlist[index]}});
      }
    }
  }
</script>
