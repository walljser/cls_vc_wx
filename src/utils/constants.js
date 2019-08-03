export const STATIC_IMAGE_PREFIX = 'https://bbs.geomen.vip/thtxImg/static/'

export const DENTRY_PREFIX = 'https://bbs.geomen.vip/thtxImg/'

export const TOKEN = 'token'

export const USER_ID = 'userId'

export const PARENT_USER_ID = 'upUserId'

export const OPEN_ID = 'openId'

export const ORDER_TYPE = {
  // -1 全部 0 待付款 1 待发货 2 待收货 3 已完成 4-退款中 5-退款成功 6-退款失败
  all: -1,
  wait_pay: 0,
  wait_out: 1,
  wait_receive: 2,
  finish: 3,
  refunding: 4,
  refund_success: 5,
  refund_failure: 6,
  close: 7,
  0: '待付款',
  1: '待发货',
  2: '待收货',
  3: '已完成',
  4: '退款中',
  5: '退款成功',
  6: '退款失败',
  7: '订单关闭'
}

export const ORDER_STATUS_COLOR = {
  0: '#d3a142',
  1: '#808080',
  2: '#d3a142',
  3: '#808080',
  4: '#808080',
  5: '#808080',
  6: '#808080',
  7: '#808080'
}

export const WITHDRAW_STATUS = {
  // 1-红包提现 2--转为体验金 3--新黑卡会员注册 4--提现审核失败,
  1: '红包提现',
  2: '转为体验金',
  3: '新黑卡会员注册',
  4: '红包提现失败'
}

export const BANK_LIST = [
  '中国工商银行',
  '中国农业银行',
  '中国银行',
  '中国建设银行',
  '招商银行',
  '平安银行',
  '交通银行',
  '中信银行',
  '兴业银行',
  '光大银行',
  '民生银行',
  '中国邮政储银行',
  '上海浦东发展银行',
  '广发银行',
  '华夏银行',
  '北京银行',
  '上海银行'
]

export const APPLY_REASON_LIST = [
  '质量问题',
  '尺寸不符',
  '卖家发错货',
  '收到商品少件/破损等',
  '其他'
]
