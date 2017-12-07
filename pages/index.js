import React from 'react'

import indexStore from '../stores/indexStore'
import withRedux from 'next-redux-wrapper'

import { init } from '../modules/initial'
import IndexContainer from '../components/IndexContainer'

const members = {
  1: {
    'name': 'A-OTF 見出ゴMB31 Pr6N',
    'image': '/static/images/photos/A-OTF 見出ゴMB31 Pr6N.png'
  },
  2: {
    'name': 'AXIS',
    'image': '/static/images/photos/AXIS.png'
  },
  3: {
    'name': 'DNP 秀英アンチック Std',
    'image': '/static/images/photos/DNP 秀英アンチック Std.png'
  },
  4: {
    'name': 'FOT-スーラ ProN',
    'image': '/static/images/photos/FOT-スーラ ProN.png'
  },
  5: {
    'name': 'FOT-セザンヌ ProN',
    'image': '/static/images/photos/FOT-セザンヌ ProN.png'
  },
  6: {
    'name': 'OSAKA',
    'image': '/static/images/photos/OSAKA.png'
  },
  7: {
    'name': 'RoぶらっしゅStd',
    'image': '/static/images/photos/RoぶらっしゅStd.png'
  },
  8: {
    'name': 'TBUDゴシック Std',
    'image': '/static/images/photos/TBUDゴシック Std.png'
  },
  9: {
    'name': 'TB新聞明朝 Std',
    'image': '/static/images/photos/TB新聞明朝 Std.png'
  },
  10: {
    'name': 'TB新聞ゴシック Std',
    'image': '/static/images/photos/TB新聞ゴシック Std.png'
  },
  11: {
    'name': 'TBシネマ丸ゴシック Std',
    'image': '/static/images/photos/TBシネマ丸ゴシック Std.png'
  },
  12: {
    'name': 'UD新ゴ',
    'image': '/static/images/photos/UD新ゴ.png'
  },
  13: {
    'name': 'VDL 京千社',
    'image': '/static/images/photos/VDL 京千社.png'
  },
  14: {
    'name': 'VDL ギガ丸',
    'image': '/static/images/photos/VDL ギガ丸.png'
  },
  15: {
    'name': 'VDL ペンレディ',
    'image': '/static/images/photos/VDL ペンレディ.png'
  },
  16: {
    'name': '筑紫A丸',
    'image': '/static/images/photos/筑紫A丸.png'
  },
  17: {
    'name': '筑紫B丸ゴシック',
    'image': '/static/images/photos/筑紫B丸ゴシック.png'
  },
  18: {
    'name': 'クレー',
    'image': '/static/images/photos/クレー.png'
  },
  19: {
    'name': '貂明朝',
    'image': '/static/images/photos/貂明朝.png'
  },
  20: {
    'name': '遊明朝',
    'image': '/static/images/photos/遊明朝.png'
  },
  21: {
    'name': '游教科書体',
    'image': '/static/images/photos/游教科書体.png'
  },
  22: {
    'name': '凸版文久明朝',
    'image': '/static/images/photos/凸版文久明朝.png'
  },
  23: {
    'name': 'ヒラギノ明朝',
    'image': '/static/images/photos/ヒラギノ明朝.png'
  },
  24: {
    'name': '小塚ゴシック',
    'image': '/static/images/photos/小塚ゴシック.png'
  },
  25: {
    'name': '源ノ角ゴシック JP',
    'image': '/static/images/photos/源ノ角ゴシック JP.png'
  },
  26: {
    'name': 'ヒラギノ丸ゴ',
    'image': '/static/images/photos/ヒラギノ丸ゴ.png'
  },
  28: {
    'name': '白舟極太楷書教漢',
    'image': '/static/images/photos/白舟極太楷書教漢.png'
  },
  29: {
    'name': '凸版文久ゴシック',
    'image': '/static/images/photos/凸版文久ゴシック.png'
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
