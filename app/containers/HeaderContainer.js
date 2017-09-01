import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from 'react-native'

import px2dp from '../util'

import Icon from 'react-native-vector-icons/Ionicons'

const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window')
const headH = px2dp(isIOS?140:120)
const InputHeight = px2dp(28)


export default class HeaderContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      location: "三源振河科技园",
      scrollY: new Animated.Value(0),
      searchView: new Animated.Value(0),
      modalVisible: false,
      searchBtnShow: true,
      listLoading: false,
      isRefreshing: false
    }

    this.SEARCH_BOX_Y = px2dp(isIOS?48:43)
    this.SEARCH_FIX_Y = headH-px2dp(isIOS?64:44)
    this.SEARCH_KEY_P = px2dp(58)
    this.SEARCH_DIFF_Y = this.SEARCH_FIX_Y-this.SEARCH_BOX_Y
    this.SEARCH_FIX_DIFF_Y = headH-this.SEARCH_FIX_Y-headH

    searchY = this.state.scrollY.interpolate({
      inputRange: [0, this.SEARCH_BOX_Y, this.SEARCH_FIX_Y, this.SEARCH_FIX_Y],
      outputRange: [0, 0, this.SEARCH_DIFF_Y, this.SEARCH_DIFF_Y]
    })
    lbsOpaticy = this.state.scrollY.interpolate({
      inputRange: [0, this.SEARCH_BOX_Y],
      outputRange: [1, 0]
    })
    keyOpaticy = this.state.scrollY.interpolate({
      inputRange: [0, this.SEARCH_BOX_Y, this.SEARCH_KEY_P],
      outputRange: [1, 1, 0]
    })

  }

  openLbs(){
    this.setState({modalVisible: true})
  }

  render(){
    return (
      <View style={styles.header}>
        <Animated.View style={[styles.lbsWeather, {opacity: lbsOpaticy}]}>
          <TouchableWithoutFeedback onPress={this.openLbs.bind(this)}>
            <View style={styles.lbs}>
              <Icon name="ios-pin" size={px2dp(18)} color="#fff" />
              <Text style={{fontSize: px2dp(18), fontWeight: 'bold', color:"#fff", paddingHorizontal: 5}}>{this.state.location}</Text>
              <Icon name="md-arrow-dropdown" size={px2dp(16)} color="#fff" />
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
        <Animated.View style={{
          marginTop: px2dp(15),
          transform: [{
            translateY: searchY
          }]
        }}>
          <TouchableWithoutFeedback onPress={()=>{}}>
            <View style={[styles.searchBtn, {backgroundColor: "#fff"}]}>
              <Icon name="ios-search-outline" size={20} color="#666" />
              <Text style={{fontSize: 13, color:"#666", marginLeft: 5}}>{"输入课程名称或机构名称"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0398ff",
    height: headH,
    paddingTop: px2dp(isIOS?30:10),
    paddingHorizontal: 16
  },
  lbsWeather: {
    height: InputHeight,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lbs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtn: {
    borderRadius: InputHeight,
    height: InputHeight,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})
