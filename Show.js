import React from 'react'
import { View, Image, Button } from 'react-native'
import A from './style/style'
import running from './img/running.png'

const Show = ({switchScreen}) => {
  return <View style={A.container}>
    <Image source={running} style={A.imageStyle} />
    <Button title='Back to landing' onPress={() => {switchScreen('landing')}} />
  </View>
}

export default Show