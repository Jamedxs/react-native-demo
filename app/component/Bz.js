import React, { Component, PropTypes } from 'react'
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LocalImg from '../images'
import px2dp from '../util'
import Button from './Button'

export default class Bz extends Component {
  constructor(props){
      super(props)
  }
  static propTypes = {
      name: PropTypes.string.isRequired, // 课程名
      logo: PropTypes.string.isRequired, // 课程logo
      isBrand: PropTypes.bool, //是否展示品牌
      scores: PropTypes.number, //课程评分
      type: PropTypes.string, //类型
      price: PropTypes.number,//价格
      startTime: PropTypes.string, //上课开始时间
      endTime: PropTypes.string, //上课结束时间
      institution: PropTypes.string, //机构名称
      activities: PropTypes.array,
      onPress: PropTypes.func
  }
  renderActivities(){
    let color = {
      "原": "#f07373",
      "特": "#f1884f",
      "新": "#73f08e"
    }
    let {activities} = this.props
    if(!activities || !activities.length){
      return null
    }else{
      return (
        <View style={styles.actives}>
          {
            activities.map((item, i) => {
              return (
                <View key={i} style={{flexDirection: "row", marginTop: 5}}>
                  <Text style={{fontSize: px2dp(11), color: "#fff", backgroundColor: color[item.key] || "#f1884f", paddingHorizontal: 1, paddingVertical: 1}}>{item.key}</Text>
                  <Text numberOfLines={1} style={{fontSize: px2dp(11), marginLeft:3, color: "#666"}}>{item.text}</Text>
                </View>
              )
            })
          }
        </View>
      )
    }
  }
  render(){
    const {name, isBrand, logo, scores, type, price, startTime, endTime,institution, activities, onPress} = this.props
    let scale = scores/5*55
    return (
      <Button onPress={onPress}>
        <View style={styles.bzWrap}>
          <View style={styles.border}>
            <Image source={LocalImg[logo]} style={styles.bzLogo}/>
            <View style={styles.bzContent}>
              <View style={styles.between}>
                <View style={{flexDirection: "row", flex: 1}}>
                  {isBrand?(<Text style={styles.brand}>{"品牌"}</Text>):null}
                  <Text numberOfLines={1} style={styles.name}>{name}</Text>
                </View>
                <View style={{flexDirection: "row", flex: 1}}>
                  <Text style={{fontSize: px2dp(11), color: "#666", marginLeft: 2}}>{`${type}`}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"flex-end"}}>
                  <Text style={[styles.label2, {marginLeft: 2}]}>{`￥${price}`}</Text>
                </View>
              </View>
              <View style={[styles.between, {marginTop: 8}]}>
                <View style={{flexDirection: "row", flex: 1}}>
                  <Text style={{fontSize: px2dp(12), color: "#000", marginLeft: 2}}>{`上课时间${startTime}到${endTime}`}</Text>
                </View>
              </View>
              <View style={[styles.between, {marginTop: 8}]}>
                <View style={{flexDirection: "row", flex: 1}}>
                  <Text style={{fontSize: px2dp(12), color: "#000", marginLeft: 2}}>{`${institution}`}</Text>
                </View>
              </View>
              {this.renderActivities()}
            </View>
          </View>
        </View>
      </Button>
    )
  }
}


const styles = StyleSheet.create({
  bzWrap: {
    backgroundColor: "#fff",
    paddingLeft: 10
  },
  border: {
    flexDirection: "row",
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5"
  },
  bzBox: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderTopColor: "#f9f9f9"
  },
  bzLogo: {
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#f9f9f9",
    width: px2dp(60),
    height: px2dp(60)
  },
  bzContent: {
    marginLeft: 6,
    marginRight: 10,
    flex: 1
  },
  between: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 3
  },
  brand: {
    fontSize: 12,
    color: "#52250a",
    paddingHorizontal: 3,
    paddingVertical: 2,
    backgroundColor: "#ffdc37"
  },
  label: {
    fontSize: 10,
    color: "#999",
    borderWidth: 1,
    borderColor: "#eee",
    textAlign: "center",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 3
  },
  label1: {
    fontSize: 10,
    color: "#00abff",
    borderWidth: 1,
    borderColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 3
  },
  label2: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  line: {
    fontSize: px2dp(11),
    color: "#999",
    paddingHorizontal: 3
  },
  infoText: {
    fontSize: px2dp(11),
    color: "#666"
  },
  actives: {
    paddingTop: 4,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f9f9f9"
  }
})
