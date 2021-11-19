import Vue from 'vue'
import Vuex from 'vuex'
import GlassePic from '../picImport/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paraData1: [
      {
        id: 0,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"20%",
        imgSrc: GlassePic.Glasses18
      },
      {
        id: 1,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"25.6%",
        imgSrc: GlassePic.Glasses20
      },
      {
        id: 2,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"31.2%",
        imgSrc: GlassePic.Glasses1
      },
      {
        id: 3,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"36.8%",
        imgSrc: GlassePic.Glasses7
      },
      {
        id: 4,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"42.4%",
        imgSrc: GlassePic.Glasses17
      },
      {
        id: 5,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"48%",
        imgSrc: GlassePic.Glasses16
      },
      {
        id: 6,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"53.6%",
        imgSrc: GlassePic.Glasses8
      },
      {
        id: 7,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"59.2%",
        imgSrc: GlassePic.Glasses12
      },
      {
        id: 8,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"64.8%",
        imgSrc: GlassePic.Glasses3
      },
      {
        id: 9,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"70.4%",
        imgSrc: GlassePic.Glasses6
      },
      {
        id: 10,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"76%",
        imgSrc: GlassePic.Glasses
      },
    ],
    paraData2: [
      {
        id: 11,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"20%",
        imgSrc: GlassePic.Glasses13
      },
      {
        id: 12,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"25.6%",
        imgSrc: GlassePic.Glasses4
      },
      {
        id: 13,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"31.2%",
        imgSrc: GlassePic.Glasses7
      },
      {
        id: 14,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"36.8%",
        imgSrc: GlassePic.Glasses2
      },
      {
        id: 15,
        strength:-10,
        relSpeed: 0.2,
        top:"21px",
        left:"42.4%",
        imgSrc: GlassePic.Glasses10
      },
      {
        id: 16,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"48%",
        imgSrc: GlassePic.Glasses11
      },
      {
        id: 17,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"53.6%",
        imgSrc: GlassePic.Glasses14
      },
      {
        id: 18,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"59.2%",
        imgSrc: GlassePic.Glasses5
      },
      {
        id: 19,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"64.8%",
        imgSrc: GlassePic.Glasses15
      },
      {
        id: 20,
        strength: 15,
        relSpeed: -0.2,
        top:"12px",
        left:"70.4%",
        imgSrc: GlassePic.Glasses9
      },
      {
        id: 21,
        strength: -15,
        relSpeed: 0.2,
        top:"21px",
        left:"76%",
        imgSrc: GlassePic.Glasses19
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    paraData : state => {
      return state
    }
  },
})