import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameScreen = ({navigation,route}) => {
    const {name}=route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({})