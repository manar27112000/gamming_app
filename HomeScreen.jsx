import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation,route}) => {
    const {age1}=route.params;

  return age1<16? (
    <View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("TrackScreen" ,{game:"Puzzle"} )
        }}>
      <Text>Puzzle games</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
            navigation.navigate("TrackScreen" ,{game:"Sport"} )
        }}>
      <Text>Sport games</Text>
      </TouchableOpacity>

    </View>
  ):(
    <View>
         <TouchableOpacity onPress={()=>{
            navigation.navigate("TrackScreen" ,{game:"Strategy"} )
        }}>
    <Text>Strategy games</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
            navigation.navigate("TrackScreen" ,{game:"Action"} )
        }}>
    <Text>Action games</Text>
    </TouchableOpacity>

  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})