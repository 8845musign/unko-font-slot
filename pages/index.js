import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import { init } from '../modules/initial'
import IndexContainer from '../components/IndexContainer'

const members = {
  '1': {
    'name': 'A-OTF 見出ゴMB31 Pr6N',
    'image': '/static/images/photos/01_mb31'
  },
  '2': {
    'name': 'AXIS',
    'image': '/static/images/photos/02_AXIS.png'
  },
  '3': {
    'name': 'DNP 秀英アンチック Std',
    'image': '/static/images/photos/03_antic.png'
  },
  '4': {
    'name': 'FOT-スーラ ProN',
    'image': '/static/images/photos/04_sula.png'
  },
  '5': {
    'name': 'FOT-セザンヌ ProN',
    'image': '/static/images/photos/05_sezanu.png'
  },
  '6': {
    'name': 'OSAKA',
    'image': '/static/images/photos/06_OSAKA.png'
  },
  '7': {
    'name': 'RoぶらっしゅStd',
    'image': '/static/images/photos/07_brash.png'
  },
  '8': {
    'name': 'TBUDゴシック Std',
    'image': '/static/images/photos/08_tbudgo.png'
  },
  '9': {
    'name': 'TB新聞明朝 Std',
    'image': '/static/images/photos/09_tbnewsgo.png'
  },
  '10': {
    'name': 'TB新聞ゴシック Std',
    'image': '/static/images/photos/10_tbnewsmincho.png'
  },
  '11': {
    'name': 'TBシネマ丸ゴシック Std',
    'image': '/static/images/photos/11_cinema.png'
  },
  '12': {
    'name': 'UD新ゴ',
    'image': '/static/images/photos/12_udshingo.png'
  },
  '13': {
    'name': 'VDL 京千社',
    'image': '/static/images/photos/13_kyo.png'
  },
  '14': {
    'name': 'VDL ギガ丸',
    'image': '/static/images/photos/14_vdlgigamaru.png'
  },
  '15': {
    'name': 'VDL ペンレディ',
    'image': '/static/images/photos/15_vdllady.png'
  },
  '16': {
    'name': '筑紫A丸',
    'image': '/static/images/photos/16_tsukushiA.png'
  },
  '17': {
    'name': '筑紫B丸ゴシック',
    'image': '/static/images/photos/17_tsukushiB.png'
  },
  '18': {
    'name': 'クレー',
    'image': '/static/images/photos/18_klee.png'
  },
  '19': {
    'name': '貂明朝',
    'image': '/static/images/photos/19_ten.png'
  },
  '20': {
    'name': '遊明朝',
    'image': '/static/images/photos/20_yumincho.png'
  },
  '21': {
    'name': '游教科書体',
    'image': '/static/images/photos/21_yukyokasho.png'
  },
  '22': {
    'name': '凸版文久明朝',
    'image': '/static/images/photos/22_totsumin.png'
  },
  '23': {
    'name': 'ヒラギノ明朝',
    'image': '/static/images/photos/23_hiragino_mincho.png'
  },
  '24': {
    'name': '小塚ゴシック',
    'image': '/static/images/photos/24_koduka.png'
  },
  '25': {
    'name': '源ノ角ゴシック JP',
    'image': '/static/images/photos/25_gen.png'
  },
  '26': {
    'name': 'ヒラギノ丸ゴ',
    'image': '/static/images/photos/26_hiragino_maru.png'
  },
  '27': {
    'name': '白舟極太楷書教漢',
    'image': '/static/images/photos/27_shiro.png'
  },
  '28': {
    'name': '凸版文久ゴシック',
    'image': '/static/images/photos/28_tostsugo.png'
  }
}

class IndexPage extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(init(members))

    return store.getState()
  }

  render () {
    return (
      <IndexContainer />
    )
  }
}

export default withRedux(indexStore)(IndexPage)
