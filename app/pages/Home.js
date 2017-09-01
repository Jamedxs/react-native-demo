'use strict';

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
  Dimensions,
  ActivityIndicator,
  Animated
} from 'react-native'
//import LocalImg from '../images'
import TypeIcons from '../images/typeIcons'


import px2dp from '../util'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import SplashScreen from 'react-native-splash-screen'

//容器
import ItemsTypeContainer from '../containers/ItemsTypeContainer'
import AnnouncementContainer from '../containers/AnnouncementContainer'
import HeaderContainer from '../containers/HeaderContainer'

//组件
import SearchView from '../component/SearchView'
import LbsModal from '../component/LbsModal'
// import TabView from '../component/TabView'
import Bz from '../component/Bz'
import ClassDetailPage from './ClassDetailPage'
import data from '../data'



const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window')
const headH = px2dp(isIOS?140:120)
const InputHeight = px2dp(28)

//const typeImagesArray = [require('../images/h_1.png'),require('../images/h_2.png'),require('../images/h_3.png')]

export default class HomePage extends Component {
  constructor(props){
      super(props)
      this.state = {
        scrollY: new Animated.Value(0),
        searchView: new Animated.Value(0),
        isRefreshing: false
      }

      this.SEARCH_BOX_Y = px2dp(isIOS?48:43)
      this.SEARCH_FIX_Y = headH-px2dp(isIOS?64:44)
  }

  // componentDidMount(){
  //     SplashScreen.hide()
  //     BackAndroid.addEventListener('hardwareBackPress', function () {
  //         BackAndroid.exitApp(0)
  //         return true
  //     })
  // }

  _renderFixHeader(){
    let showY = this.state.scrollY.interpolate({
      inputRange: [0, this.SEARCH_BOX_Y, this.SEARCH_FIX_Y, this.SEARCH_FIX_Y],
      outputRange: [-9999, -9999, 0, 0]
    })
    return (
      <Animated.View style={[styles.header, {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        height: px2dp(isIOS?64:44),
        paddingTop: px2dp(isIOS?25:10),
        transform: [
          {translateY: showY}
        ]
      }]}>
        <TouchableWithoutFeedback onPress={()=>{}}>
          <View style={[styles.searchBtn, {backgroundColor: "#fff"}]}>
            <Icon name="ios-search-outline" size={20} color="#666" />
            <Text style={{fontSize: 13, color:"#666", marginLeft: 5}}>{"输入商家，商品名称"}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }

  changeLocation(location){
    this.setState({location})
  }

  _renderBZ(){
    return data.list.map((item, i) => {
      item.onPress = () => {
        this.props.navigator.push({
            component: ClassDetailPage,
            args: {
              name : item.name,
              classNumber : item.classNumber,
              logo : item.logo,
            }
        })
      }
      return (<Bz {...item} key={i}/>)
    })
  }

  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 2000)
  }

  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <ScrollView
          style={styles.scrollView}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              colors={['#ddd', '#0398ff']}
              progressBackgroundColor="#ffffff"
            />
          }
        >
          <HeaderContainer />

          <View style={{backgroundColor: "#fff", paddingBottom: 10}}>
            <ItemsTypeContainer />
          </View>

          <View style={styles.business}>
            <AnnouncementContainer />
          </View>

          <View style={styles.business}>
            <Text style={{color: "#666", paddingLeft: 16, paddingBottom: 6}}>{"热门课程"}</Text>
            {this._renderBZ()}
            <ActivityIndicator style={{marginTop: 10}} animating={this.state.listLoading}/>
          </View>

        </ScrollView>
        {this._renderFixHeader()}
        <SearchView show={this.state.searchView} scrollY={this.state.scrollY}/>
        <LbsModal
          modalVisible={this.state.modalVisible}
          location={this.state.location}
          setLocation={this.changeLocation.bind(this)}
          closeModal={(()=>this.setState({modalVisible: false})).bind(this)}
        />
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
  placeholder: {
    height: InputHeight,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    borderRadius: px2dp(14),
    backgroundColor: "#fff",
    alignItems: "center"
  },
  weather: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInput:{
    flex: 1,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    height: InputHeight,
    borderRadius: px2dp(14),
    backgroundColor: "#fff"
  },
  searchHeadBox: {
    height: InputHeight,
    flexDirection: "row",
    alignItems: "center"
  },
  searchBtn: {
    borderRadius: InputHeight,
    height: InputHeight,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  keywords: {
    marginTop: px2dp(14),
    flexDirection: "row"
  },
  scrollView: {
    marginBottom: px2dp(46)
  },
  recom: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 10,
    flexWrap: "wrap"
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  business: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingVertical: 16
  },
  time: {
    paddingHorizontal: 3,
    backgroundColor: "#333",
    fontSize: px2dp(11),
    color: "#fff",
    marginHorizontal: 3
  },
  recomItem: {
    width: width/2,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row"
  },
  recomWrap: {
    flex: 1,
    height: 70,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  lTimeScrollView: {
  },
  lTimeList: {
    backgroundColor:"#fff",
    alignItems: "center"
  },
  qtag: {
    fontSize: 12,
    borderWidth: 1,
    color: "#00abff",
    borderColor: "#00abff",
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 5
  },
  gift: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  fixSearch: {
    backgroundColor: "#0398ff",
    height: isIOS ? 64 : 42,
    paddingTop: isIOS ? 20 : 0,
    paddingHorizontal: 16,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
})
