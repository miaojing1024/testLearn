import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 后台系统样式
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 组件传值
    path: '/alltext',
    name: 'Alltext',
    component: () => import('../views/ComponentTrans/alltext.vue')
  },
  {
    // 混入
    path: '/textMixins',
    name: 'TextMixins',
    component: () => import('../views/technology/textMixins.vue')
  },
  {
    // 计时,智能联想
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    // 计数,地图,tab选项,改变tab样式的tab
    path: '/demoall',
    name: 'Demoall',
    component: () => import('../views/demoall.vue')
  },
  {
    // 懒加载到底刷新
    path: '/lazy',
    name: 'Lazy',
    component: () => import('../views/lazy.vue')
  },
  {
    // vant的懒加载到底刷新
    path: '/vantlazy',
    name: 'Vantlazy',
    component: () => import('../views/vantlazy.vue')
  },
  {
    // 步骤条的使用
    path: '/useSteps',
    name: 'UseSteps',
    component: () => import('../views/textSteps/useSteps.vue')
  },
  {
    // 根据汉语找英文的首字母
    path: '/english',
    name: 'English',
    component: () => import('../views/technology/english.vue')
  },
  {
    // 
    path: '/text',
    name: 'Text',
    component: () => import('../views/text.vue')
  },
  {
    // element样式测试修改 
    path: '/element',
    name: 'Element',
    component: () => import('../views/element.vue')
  },
  {
    // 会员经营的路由实验
    path: '/application',
    name: 'Application',
    component: () => import('../views/application.vue')
  },
  // 会员经营的路由
  {
    path: '/applicactionRecord',
    name: 'Rapplicaction',
    component: () => import('../views/MemberManagement/record/applicactionRecord.vue')
  },
  {
    path: '/invitationRecord',
    name: 'InvitationRecord',
    component: () => import('../views/MemberManagement/record/invitationRecord.vue')
  },
  {
    path: '/applicationExamine',
    name: 'ApplicationExamine',
    component: () => import('../views/MemberManagement/examine/applicationExamine.vue')
  },
  {
    path: '/inivitationExamine',
    name: 'InivitationExamine',
    component: () => import('../views/MemberManagement/examine/inivitationExamine.vue')
  },
  {
    path: '/approvalDetail',
    name: 'ApprovalDetail',
    component: () => import('../views/MemberManagement/approvalDetail.vue')
  },
  // 客户业绩
  {
    path: '/achievement',
    name: 'Achievement',
    component: () => import('../views/MemberManagement/customerInfo/achievement.vue')
  },
  // 客户资质
  {
    path: '/qualifications',
    name: 'Qualifications',
    component: () => import('../views/MemberManagement/customerInfo/qualifications.vue')
  },
  // 客户资产
  {
    path: '/assets',
    name: 'Assets',
    component: () => import('../views/MemberManagement/customerInfo/assets.vue')
  },
  // 企业动态
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/MemberManagement/customerInfo/dynamic.vue')
  },
  // 招采的路由
  {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('../views/recruitment/recruitment.vue')
  },
  // 报名记录详情
  {
    path: '/registrationRecord',
    name: 'RegistrationRecord',
    component: () => import('../views/recruitment/registrationRecord.vue')
  },
  // 报名申请详情
  {
    path: '/registrationApplication',
    name: 'RegistrationApplication',
    component: () => import('../views/recruitment/registrationApplication.vue')
  },
  // 投标记录详情
  {
    path: '/bidRecord',
    name: 'BidRecord',
    component: () => import('../views/recruitment/bidRecord.vue')
  },
  // 懒加载
  {
    path: '/lazy',
    name: 'Lazy',
    component: () => import('../views/lazy.vue')
  },
  // vant的懒加载
  {
    path: '/vantlazy',
    name: 'Vantlazy',
    component: () => import('../views/vantlazy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
