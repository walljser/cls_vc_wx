function toPx(rpx, factor) {	// rpx转px
  return rpx * factor
}
function toRpx(px, factor) {	// px转rpx
  return px / factor
}

export default {
  toPx,
  toRpx
}
