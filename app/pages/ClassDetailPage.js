
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Animated,
  AlertIOS,
  Platform,
  findNodeHandle,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import NavBar from '../component/NavBar'
import px2dp from '../util'
import LocalImg from '../images'


let {width, height} = Dimensions.get('window')

export default class ClassDetailPage extends Component {

  constructor(props){
      super(props)

      this.state = {
        scrollY: 0,
        titleOpacity: 1,
        data: {
          name: "田老师红烧肉（知春路店）"
        }
      }

  }

  back(){
    this.props.navigator.pop()
  }

  _buyNow(){
    this.props.navigator.push({
        component: DetailPage,
        args: {
          name : item.name,
          classNumber : item.classNumber,
          logo : item.logo,
        }
    })
  }

  render(){
    const {name,classNumber,logo} = this.props
    return (
      <View style={styles.main}>
        <View style={styles.first}>
          <NavBar
            title={"课程详情"}
            titleStyle={{opacity: this.state.titleOpacity}}
            style={{backgroundColor: "#666", position:"absolute", top:0, width}}
            leftIcon="ios-arrow-back"
            leftPress={this.back.bind(this)}
            rightIcon="ios-more"
            rightPress={()=>{}}
          />
        </View>
        <View style={styles.two}>
          <View style={styles.image}>
            <Image source={LocalImg[logo]} style={styles.bzLogo}/>
          </View>
          <View style={styles.detail}>
            <View style={{flex: 1}}>
              <Text>
                {`${name}`}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                {`课程编号:${classNumber}`}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                {`授课老师:${classNumber}`}
              </Text>
            </View>
            <View>
              <Text>
                {`上课日期:${classNumber} 到 ${classNumber} `}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                {`上课时间:${classNumber}`}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                {`价格:${classNumber}`}
              </Text>
            </View>


          </View>
        </View>
        <View style={styles.three}>
          <View >
            <Icon name="ios-pin" size={30} />
          </View>
          <View >
            <Text>
              {`地点:${classNumber}`}
            </Text>
          </View>
          <View >
            <Text>
              {`电话:${classNumber}`}
            </Text>
          </View>

        </View>
        <View style={styles.four}>
          <Text>
            课程简介
          </Text>
        </View>
        <View style={styles.five}>
          <Text>
            {`课程简介内容:${classNumber}`}
          </Text>
        </View>
        <View style={styles.six}>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.numItem}>
              <Icon name="ios-star-outline" size={px2dp(28)} />
              <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"收藏"}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.numItem}>
              <Text>立即购买</Text>
            </View>
          </TouchableHighlight>
        </View>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  first: {
    alignItems: "center",
    backgroundColor: "#666",
    height: height/12
  },
  two: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFC8B4"
  },
  image: {
    alignItems: "center",
    backgroundColor: "#FFC8B4",
    width: width/3,
  },
  bzLogo: {
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#f9f9f9",
    width: width/3,
    height: px2dp(150)
  },
  detail: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFC8B4"
  },
  three: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF8800",
    height: height/10
  },
  four: {
    alignItems: "center",
    backgroundColor: "#55AA00",
    height: height/15
  },
  five: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#66FFFF"
  },
  six: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#9999FF",
    height: height/12
  },
  numItem: {
    flex: 1,
    width: width/4,
    justifyContent: "center",
    alignItems: "center"
  }
})
