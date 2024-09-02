import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})