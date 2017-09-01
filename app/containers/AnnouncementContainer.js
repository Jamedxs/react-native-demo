
'use strict';

import React, { Component , PropTypes } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native'


import LocalImg from '../images'
import px2dp from '../util'

import TypeIcons from '../images/typeIcons'
import Swiper from 'react-native-swiper'

import data from '../data'

const { width, height } = Dimensions.get('window')
const isIOS = Platform.OS == "ios"
const w = width, h = height/12


export default class AnnouncementContainer extends Component {
  constructor(props){
    super(props);
  }

  static propTypes = {
      tile: PropTypes.string, // 标题
      image: PropTypes.number, // 公告图片
      text: PropTypes.string   //公告内容
  }

  renderSwipeView = (types) => {
    return (
      types.map((item, i) => {
        let announcement = (
            <View style={styles.totalView}>
              <View style={styles.imageView}>
                <Image source={LocalImg['a'+(item.image)]} style={styles.imageView}/>
              </View>
              <View style={{flexDirection: "column" }}>
                <View style={{justifyContent: "center" }}>
                  <Text style={styles.titleView}>{item.title}</Text>
                </View>
                <View style={{flex: 1} }>
                  <Text style={styles.textView}>{item.text}</Text>
                </View>
              </View>


            </View>
        )
        return (
          isIOS?(
            <TouchableHighlight style={{width: w, height: h*1.5}} key={i} onPress={() => {}}>{announcement}</TouchableHighlight>
          ):(
            <TouchableNativeFeedback style={{width: w, height: h*1.5}} key={i} onPress={() => {}}>{announcement}</TouchableNativeFeedback>
          )
        )

      })
    )
  }

  render(){
    return (
      <Swiper
        height={h*2.4}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
        activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}>
        {this.renderSwipeView(data.AnnouncementData)}
      </Swiper>
    )
  }

}

const styles = StyleSheet.create({
  totalView: {
    flexDirection: "row",
    flex:1
  },
  imageView: {
    width: w/4,
    height: h*1.5
  },
  titleView: {
    fontSize: px2dp(15),
    color:"#666",
    width: w/4 * 3,
    height: h*1.5/4
  },
  textView: {
    flexDirection: "column",
    fontSize: px2dp(12),
    color:"#666",
    width: w/4 * 3,
    height: h*1.5/4*3
  }
})
