import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TrackScreen = ({ navigation, route }) => {
    const { game } = route.params;

    return game == 'Puzzle' ? (
        <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("GameScreen", { name: "Minesweeper" })
            }}><Text>Minesweeper</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("GameScreen", { name: "Chess" })
            }}>      <Text>Chess</Text>
            </TouchableOpacity>

        </View>
    ) : game == 'Sport' ?
        (
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("GameScreen", { name: "Football" })
                }}>                     <Text>Football</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("GameScreen", { name: "Tennis" })
                }}>                     <Text>Tennis</Text>

                </TouchableOpacity>
            </View>
        ) : (
            <View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("GameScreen", { name: "Tennis" })
                }}>                                  <Text>Shooter</Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("GameScreen", { name: "Tennis" })
                }}>
                    <Text>Fighting</Text>


                </TouchableOpacity>
            </View>
        )
}

export default TrackScreen

const styles = StyleSheet.create({})