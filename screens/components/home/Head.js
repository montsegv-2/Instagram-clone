import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Head = () => {
  return (
    <View>
        <Image 
            style = { styles.logo } 
            source = {require('../../../assets/instagram-logo.png')} />
    </View>
  )
}   

const styles = StyleSheet.create({
        logo: {
            width: 100,
            height: 50,
            resizeMode: 'contain'
        }
})
export default Head