import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Head from './components/home/Head'
import Stories from './components/home/Stories'


const HomeScreen = () => {
  return (
    <SafeAreaView style = { styles.container }>
        <Head/>
        <Stories/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      flex: 1
  }
})

export default HomeScreen