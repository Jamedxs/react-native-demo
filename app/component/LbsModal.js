import React, { Component } from 'react'
import {
  View,
  Text,
  Modal,
  AlertIOS,
  Dimensions,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import px2dp from '../util'
//import NavBar from '../component/NavBar'
//import Button from '../component/Button'
let {width, height} = Dimensions.get('window')
const isAndroid = Platform.OS == "android"

export default class LbsModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      address: [
        {
          name: "Lei",
          phone: "13581970418",
          tag: "公司",
          color: "#0096ff",
          address: "微软亚太研发集团"
        },
        {
          name: "Lei",
          phone: "13581970418",
          tag: "家",
          color: "#ff6000",
          address: "北京朝阳区三里屯SOHO"
        }
      ],
      near: ["颐和雅苑烤鸭坊", "中国电子大厦", "立方-庭"]
    }
  }
  closeModal(){
    this.props.closeModal()
  }
  getLocation(){
    if(this.state.loading){
      return
    }
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.props.setLocation("中关村")
    }, 1200)
    /*
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log("title",initialPosition)
        this.setState({initialPosition});
      },
      (error) => AlertIOS.alert("title",JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )*/
  }
  render(){
    return (
      <View>
        <Text>
          lbs页面!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 13,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 10,
    color: "#666"
  },
  scrollView: {
    backgroundColor: "#f3f3f3"
  },
  tag: {
    color: "#fff",
    fontSize: px2dp(12),
    minWidth: px2dp(30),
    textAlign: "center",
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginRight: 5
  },
  ads1List: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5
  },
  searchView: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#0398ff"
  },
  textInput: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 0,
    height: px2dp(28),
    borderRadius: px2dp(6),
    backgroundColor: "#fff"
  },
  address: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    height: px2dp(45),
    backgroundColor: "#fff"
  },
  address1: {
    borderBottomWidth: 1,
    borderBottomColor: "#fbfbfb",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    paddingVertical: 8
  }
})
