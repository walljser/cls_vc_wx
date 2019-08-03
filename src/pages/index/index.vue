<template>
  <div class="page-index">
    <div class="voice-wrap">
      <div class="voice-zheng" />
      <image :class="bpClassName" src="/static/img/bp.png" />
    </div>
    <div class="footer">
      <van-icon v-if="!isPlaying" @click="handlePlay" name="play-circle-o" class="icon-start" size="80px" color="#b6b6b6" />
      <van-icon v-else @click="handlePause" name="pause-circle-o" class="icon-start" size="80px" color="#b6b6b6" />
      <image class="icon-left" src="/static/img/back.png" />
      <image class="icon-right" src="/static/img/next.png" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlaying: false
    }
  },
  computed: {
    bpClassName () {
      if (this.isPlaying) {
        return 'voice-round Rotation'
      }
      return 'voice-round'
    }
  },
  methods: {
    handlePlay () {
      this.isPlaying = true
    },
    handlePause () {
      this.isPlaying = false
    }
  }
}
</script>

<style></style>
