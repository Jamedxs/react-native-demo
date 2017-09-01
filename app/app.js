import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import NavigationExperimental from 'react-native-deprecated-custom-components'
import Wrapper from './component/Wrapper'

export default class Navigation extends Component{
    constructor(props){
      super(props)
    }
    render(){

        return Platform.OS == "ios"?(
          <NavigationExperimental.Navigator
            initialRoute={{component: Wrapper}}
            configureScene={() => NavigationExperimental.Navigator.SceneConfigs.FloatFromRight}
            renderScene={(route, navigator) => {
                  return <route.component navigator={navigator} {...route.args}/>
                }
            }
          />
        ):(
          <View style={{flex: 1}}>
            <StatusBar
             backgroundColor="#0398ff"
             barStyle="light-content"
           />
            <NavigationExperimental.Navigator
              initialRoute={{component: Wrapper}}
              configureScene={() => NavigationExperimental.Navigator.SceneConfigs.FloatFromRight}
              renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                  }
              }
            />
          </View>
        )
    }
}
