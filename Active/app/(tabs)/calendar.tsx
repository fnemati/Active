import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Pressable, Alert } from 'react-native'
import React, {useState} from 'react'
import {  Agenda, AgendaEntry } from 'react-native-calendars' 



const calendar: React.FC = () => {
  
  const renderItem = (schedule: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c"

    return (
      <Pressable
        style={[styles.item, { height: schedule.height}]}
        onPress={() => Alert.alert(schedule.name)}
        >
          <Text style={{fontSize, color}}>{schedule.name}</Text>
      </Pressable>
    )
    
    
  }

  const renderEmptyDate = () => {
    return (
      <SafeAreaView style ={styles.emptyDate}>
        <Text>This is an empty date</Text>
      </SafeAreaView>
    )
  }


  return (
    <>
      <SafeAreaView style={styles.container}>
        <Agenda 
          items={{
            '2024-09-09': [],
            '2024-09-10': [{name :'Gym: core workout '}],
            '2024-09-11': [{id: '1', name:'TechWise Meeting'},{id: '2', name: 'Class Meet'}],
            '2024-09-12': [{name:'Gym: leg workout', id: '1'},{id: '2', name: 'Important meeting'}]
            
          }}
          renderItem={renderItem} 
          renderEmptyDate={renderEmptyDate}
          selected="2024-09-11"
          showOnlySelectedDayItems
         
        /> 
      </SafeAreaView>

      
    </>
  )
}

export default calendar

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  },
  item:{
    backgroundColor:'lightblue',
    flex:1,
    borderRadius:5,
    padding:10,
    marginRight:10,
    marginTop: 17,
    paddingBottom:20
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
})