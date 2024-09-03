import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const goals = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Your Monthly Goals</Text>
        <Text style={styles.subtitle}>September</Text>
        <Text style={styles.list}> Your Goals List </Text>
      </View>
      
    </>
  )
}

export default goals

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderWidth: 3,
    borderColor: '#20232a',
    borderRadius: 7,
    backgroundColor: '#eaeacf',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500'
  },
  subtitle: {
    paddingVertical: 55,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 7,
    backgroundColor: '#d9e8ed',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500'
  },
  list: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 7,
    backgroundColor: '#ebdfec',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500'
  }
})