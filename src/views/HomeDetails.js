import React, { Component } from 'react'
import { View,Text } from 'react-native'
export default class HomeDetails  extends Component{
   constructor(props){
       super(props)
       this.state = {}
   }
   render(){
       const { route } = this.props
       return(
           <View>
               <Text>{route.params}</Text>
           </View>
       )
   }
}