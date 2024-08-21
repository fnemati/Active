import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars' 



const calendar = () => {
  const [selected, setSelected] = useState('')
  const workout = {key: 'workout', color: 'red', selectedDotColor: 'red'} // inputted just for show 
  const restDay = {key: 'rest', color: 'green', selectedDotColor: 'green'}
  return (
    <>
      <View style={styles.container}>
        <Text></Text>
      </View>
      <Calendar 
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        // change style however you see fit
        style={{
          borderWidth: 2,
          borderColor: 'gray',
          height: 400
        }}
        markingType={'multi-dot'}
        markedDates={{
          '2024-08-21': {dots: [restDay,workout], selected: true, selectedColor: 'red'}
        }}
      />
      
    </>
  )
}

export default calendar

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})