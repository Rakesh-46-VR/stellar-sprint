import { ScrollView, Image , StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatesCards() {
  return (
    <View>
      <Text style={styles.headingText}>Top picks</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/comsat.jpg" style={styles.image}></Image>
            <h2>Comsat</h2>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/auto_bots.jpg" style={styles.image}></Image>
            <h2>Personal Robots</h2>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/ncp_battery.jpg" style={styles.image}></Image>
            <h2>Nuclear Powered Battery</h2>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/rover.jpg" style={styles.image}></Image>
            <h2>Multi-Terrain Rover</h2>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/the_X.jpg" style={styles.image}></Image>
            <h2>SEE THROUGH THE X</h2>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Image source="https://rakesh-46.b-cdn.net/vitamins.jpg" style={styles.image}></Image>
            <h2>Essential Vitamins</h2>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        flex:1,
        alignItems:'center',
        width:300,
        height:280,
        borderRadius:4,
        margin:8,
        justifyContent:"space-between"
    },
    container:{
      
    },
    cardElevated:{
      padding:5,
      backgroundColor:'#CAD5E2',
      shadowOffset:{
        width:1,
        height:1
      },
      shadowOpacity:0.4,
      shadowRadius:5,
      shadowColor:"#787171"
    },
    image: {      
      padding:5,
      borderRadius:5,
      width:290,
      height: 200,
    },
})