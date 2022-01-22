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
        top:"90px",
        left:"3%",
        imgSrc: GlassePic.Glasses18
      },
      {
        id: 1,
        strength: 10,
        relSpeed: -0.2,
        top:"50px",
        left:"12%",
        imgSrc: GlassePic.Glasses20
      },
      {
        id: 2,
        strength:-10,
        relSpeed: 0.2,
        top:"90px",
        left:"21%",
        imgSrc: GlassePic.Glasses1
      },
      {
        id: 3,
        strength: 10,
        relSpeed: -0.2,
        top:"50px",
        left:"30%",
        imgSrc: GlassePic.Glasses7
      },
      {
        id: 4,
        strength:-10,
        relSpeed: 0.2,
        top:"90px",
        left:"39%",
        imgSrc: GlassePic.Glasses17
      },
      {
        id: 5,
        strength: 10,
        relSpeed: -0.2,
        top:"50px",
        left:"48%",
        imgSrc: GlassePic.Glasses16
      },
      {
        id: 6,
        strength: -15,
        relSpeed: 0.2,
        top:"90px",
        left:"57%",
        imgSrc: GlassePic.Glasses8
      },
      {
        id: 7,
        strength: 10,
        relSpeed: -0.2,
        top:"50px",
        left:"66%",
        imgSrc: GlassePic.Glasses12
      },
      {
        id: 8,
        strength: -15,
        relSpeed: 0.2,
        top:"90px",
        left:"75%",
        imgSrc: GlassePic.Glasses3
      },
      {
        id: 9,
        strength: 10,
        relSpeed: -0.2,
        top:"50px",
        left:"84%",
        imgSrc: GlassePic.Glasses6
      },
      {
        id: 10,
        strength: -15,
        relSpeed: 0.2,
        top:"90px",
        left:"93%",
        imgSrc: GlassePic.Glasses
      },
    ],
    paraData2: [
      {
        id: 11,
        strength:-10,
        relSpeed: 0.2,
        top:"-50px",
        left:"3%",
        imgSrc: GlassePic.Glasses13
      },
      {
        id: 12,
        strength: 10,
        relSpeed: -0.2,
        top:"-90px",
        left:"12%",
        imgSrc: GlassePic.Glasses4
      },
      {
        id: 13,
        strength:-10,
        relSpeed: 0.2,
        top:"-50px",
        left:"21%",
        imgSrc: GlassePic.Glasses7
      },
      {
        id: 14,
        strength: 10,
        relSpeed: -0.2,
        top:"-90px",
        left:"30%",
        imgSrc: GlassePic.Glasses2
      },
      {
        id: 15,
        strength:-10,
        relSpeed: 0.2,
        top:"-50px",
        left:"39%",
        imgSrc: GlassePic.Glasses10
      },
      {
        id: 16,
        strength: 10,
        relSpeed: -0.2,
        top:"-90px",
        left:"48%",
        imgSrc: GlassePic.Glasses11
      },
      {
        id: 17,
        strength: -15,
        relSpeed: 0.2,
        top:"-50px",
        left:"57%",
        imgSrc: GlassePic.Glasses14
      },
      {
        id: 18,
        strength: 10,
        relSpeed: -0.2,
        top:"-90px",
        left:"66%",
        imgSrc: GlassePic.Glasses5
      },
      {
        id: 19,
        strength: -15,
        relSpeed: 0.2,
        top:"-50px",
        left:"75%",
        imgSrc: GlassePic.Glasses15
      },
      {
        id: 20,
        strength: 10,
        relSpeed: -0.2,
        top:"-90px",
        left:"84%",
        imgSrc: GlassePic.Glasses9
      },
      {
        id: 21,
        strength: -15,
        relSpeed: 0.2,
        top:"-50px",
        left:"93%",
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