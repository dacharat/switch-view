import React from 'react'
import {Text, View, Image, Button} from 'react-native'
import img from './img/logo.png'
import A from './style/style'

const Landing = ({switchScreen}) => {
  return <View style={A.container}>
    <Image source={img} style={A.imageStyle} />
    <Text>Hello I am here</Text>
    {console.log('5555')}
    <Button title='Click to go to the view' onPress={() => {switchScreen('running')}} />
  </View>
}

export default Landing