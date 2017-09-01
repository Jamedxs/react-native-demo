
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  AlertIOS,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  RefreshControl
} from 'react-native'

import LocalImg from '../images'
import NavBar from '../component/NavBar'
import Item from '../component/Item'
//import Setting from './Setting'
//import UserProfile from './UserProfile'
//import Address from './Address'
import px2dp from '../util'

import Icon from 'react-native-vector-icons/Ionicons'
let {width, height} = Dimensions.get('window')

export default class My extends Component {
  constructor(props){
      super(props)
      this.state = {
        isRefreshing: false
      }
      this.config = [
        {icon:"ios-card", name:"银行卡",onPress:this.goPage.bind(this, "address")},
        {icon:"ios-people", name:"常用学员", color:"#fc7b53"},
        {icon:"md-contacts", name:"关于我们"},
      ]
  }
  goPage(key, data = {}){
    let pages = {
      "address": Address
    }
    if(pages[key]){
      this.props.navigator.push({
          component: pages[key],
          args: { data }
      })
    }
  }
  leftPress(){

  }
  rightPress(){
    this.props.navigator.push({
        component: Setting,
        args: {}
    });
  }
  goProfile(){
    this.props.navigator.push({
        component: UserProfile,
        args: {}
    });
  }
  componentDidMount(){
    this._onRefresh()
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 1500)
  }
  _renderListItem(){
    return this.config.map((item, i) => {
      if(i%3==0){
        item.first = true
      }
      return (<Item key={i} {...item}/>)
    })
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar
          title="我的"
          leftIcon="ios-notifications-outline"
          leftPress={this.leftPress.bind(this)}
          rightIcon="ios-settings-outline"
          rightPress={this.rightPress.bind(this)}
        />
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#fff"
              colors={['#ddd', '#0398ff']}
              progressBackgroundColor="#ffffff"
            />
          }
        >
          <View style={{minHeight: height - 64 - px2dp(46), paddingBottom: 100, backgroundColor: "#f3f3f3"}}>
            <TouchableWithoutFeedback onPress={this.goProfile.bind(this)}>
              <View style={styles.userHead}>
                <View style={{flex: 1,flexDirection: "row"}}>
                  <Image source={LocalImg.avatar} style={{width: px2dp(60), height: px2dp(60), borderRadius: px2dp(30)}}/>
                  <View style={{flex: 1, marginLeft: 10, paddingVertical: 5}}>
                    <View style={{marginTop: px2dp(10), flexDirection: "row"}}>
                      <Icon name="ios-phone-portrait-outline" size={px2dp(14)} color="#fff" />
                      <Text style={{color: "#fff", fontSize: 13, paddingLeft: 5}}>135****0418</Text>
                    </View>
                  </View>
                </View>
                <Icon name="ios-arrow-forward-outline" size={px2dp(22)} color="#fff" />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.numbers}>
              <TouchableHighlight onPress={() => {}}>
                <View style={styles.numItem}>
                    <Icon name="ios-star" size={px2dp(28)} color="#ff5f3e" />
                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"收藏夹"}</Text>
                </View>
              </TouchableHighlight>
              <TouchableWithoutFeedback>
                <View style={[styles.numItem,{borderLeftWidth: 1, borderLeftColor: "#f5f5f5",borderRightWidth: 1, borderRightColor: "#f5f5f5"}]}>
                    <Icon name="md-heart" size={px2dp(28)} color="#ff5f3e" />
                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"关注"}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={styles.numItem}>
                    <Icon name="ios-bookmarks" size={px2dp(28)} color="#ff5f3e" />
                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"待付款"}</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={[styles.numItem,{borderLeftWidth: 1, borderLeftColor: "#f5f5f5",borderRightWidth: 1, borderRightColor: "#f5f5f5"}]}>
                    <Icon name="ios-list-box-outline" size={px2dp(28)} color="#ff5f3e" />
                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"历史订单"}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              {this._renderListItem()}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    marginBottom: px2dp(46),
    backgroundColor: "#0398ff"
  },
  userHead: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#0398ff"
  },
  numbers: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 74
  },
  numItem: {
    flex: 1,
    height: 74,
    width: width/4,
    justifyContent: "center",
    alignItems: "center"
  }
})
