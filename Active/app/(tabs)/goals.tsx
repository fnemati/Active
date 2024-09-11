import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const goals = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Your Monthly Goals</Text>
      </View>
      <View style={styles.goalscontainer}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>September {"\n"} Workout Goals {"\n"} Nutrition Goals</Text>
          <Image source={require('../../assets/images/bargraph.png')} style={styles.graph} resizeMode="center"></Image>
          <View style = {styles.goalscontainer}>
            <Text style = {styles.tinyboxblue}> Exercises Done </Text>
            <Text style = {styles.tinyboxorange}> Goals </Text>
          </View>
        </View >
      </View>
      <View style={styles.container}>
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
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#eaeacf',
    color: '#686048',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300'
  },
  subtitle: {
    paddingVertical: 25,
    paddingHorizontal: 35,
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#d9e8ed',
    color: '#686048',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '300'
  },
  list: {
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#ebdfec',
    color: '#686048',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300'
  },
  goalscontainer:{
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  graph: {
    flex: 1,
    width: 150,
    height: 150,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#c5f4c8',
  },
  graphtext: {
    fontSize: 10,
    fontWeight: '300'
  },
  tinyboxblue: {
    width: 60,
    height: 10,
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#b3e1e8',
    fontSize: 7,
    fontWeight: '300',
    textAlign: 'center',
  },
  tinyboxorange: {
    width: 60,
    height: 10,
    borderWidth: 1,
    borderColor: '#918a74',
    borderRadius: 7,
    backgroundColor: '#e7b250',
    fontSize: 7,
    fontWeight: '300',
    textAlign: 'center',
  }
})