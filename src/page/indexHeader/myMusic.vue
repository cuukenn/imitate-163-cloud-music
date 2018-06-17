<template>
  <div>
    <link rel="stylesheet" href="../../../static/css/iconfont.css">
    <Group style="font-size: 1.6rem;">
      <cell v-for="(item,index) in this.list" v-bind:key="index" :title="item.title"
            @click.native="noActionClick" primary="content" class="fontSize">
        <i slot="icon" class="iconfont" :class="[item.iconClass]"></i>
      </cell>
    </Group>
    <group>
      <cell title="创建的歌单" @click.native="shrink" is-link
            :arrow-direction="!isShow ?'right':'down'"></cell>
    </group>
    <transition name="myMusicToggle" mode="out-in">
      <Group v-show="this.isShow">
        <cell :title="item.name" @click.native="showPlayList(index)" v-for="(item,index) in myMusiclist.playlist"
              :key="index">
          <x-img slot="icon" :default-src="item.coverImgUrl" style="width: 28px"></x-img>
        </cell>
      </Group>
    </transition>
  </div>
</template>
<style lang="less" scoped>
  .myMusicToggle-enter-active {
    transition: all 0.5s linear;
  }

  .myMusicToggle-enter,
  .myMusicToggle-enter-leave-to {
    opacity: 0;
  }
</style>
<script>
  import {
    Group, Cell,
    XImg
  } from 'vux';
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      Group, Cell,
      XImg
    },
    data: function () {
      return {
        isShow: true,
        list: [
          {
            iconClass: 'icon-yinyue',
            title: '本地音乐'
          },
          {
            iconClass: 'icon-bofang1',
            title: '最近播放'
          },
          {
            iconClass: 'icon-ren',
            title: '下载管理'
          },
          {
            iconClass: 'icon-ren',
            title: '我的电台'
          },
          {
            iconClass: 'icon-ren',
            title: '我的收藏'
          }
        ]
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
            this.$store.dispatch('changemyMusiclist', rs.data.playlist);//添加到播放列表
          }
        })
    },
    methods: {
      ...mapActions([
        'changemyMusiclist'
      ]),
      shrink: function () {
        this.isShow = !this.isShow;
      },
      noActionClick: function () {
        this.$vux.toast.show({
          text: '未完成',
          type: 'warn',
        })
      },
      showPlayList: function (index) {
        this.$router.push({name: 'playListPage', params: {list: this.myMusiclist.playlist[index]}});
      }
    }
  }
</script>
