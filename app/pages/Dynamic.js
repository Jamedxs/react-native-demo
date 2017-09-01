import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'


export default class Dynamic extends Component {

  render(){
    return (
      <View style={styles.gift}>
        <Text>
          动态页面!
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  gift: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff"
  }
})
