import React, { Component } from 'react'
import {
  Text,
  View,
  BackAndroid,
  ScrollView,
  StyleSheet,
  AlertIOS,
  RefreshControl,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Image,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'
import px2dp from '../util'

import TypeIcons from '../images/typeIcons'

const { width, height } = Dimensions.get('window')
const isIOS = Platform.OS == "ios"
const w = width/3, h = w*.6


export default class ItemsTypeView extends Component {
  constructor(props){
    super(props)
  }

  renderSwipeView(types, n){
    return (
      <View style={styles.typesView}>
        {
          types.map((item, i) => {
            let render = (
              <View style={[{width: w, height: h}, styles.typesItem]}>
                <Image source={TypeIcons(i+n)} style={{width: w*.5, height: w*.5}}/>
                <Text style={{fontSize: px2dp(12), color:"#666"}}>{item}</Text>
              </View>
            )
            return (
              isIOS?(
                <TouchableHighlight style={{width: w, height: h}} key={i} onPress={() => {}}>{render}</TouchableHighlight>
              ):(
                <TouchableNativeFeedback style={{width: w, height: h}} key={i} onPress={() => {}}>{render}</TouchableNativeFeedback>
              )
            )
          })
        }
      </View>
    )
  }

  render(){
    return (
      <Swiper
        height={h*1.5}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
        activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}>
        {this.renderSwipeView(['机构','教师','课程'], 0)}

      </Swiper>
    )
  }

}

const styles = StyleSheet.create({
  typesView: {
    paddingBottom: 10,
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  typesItem: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})
