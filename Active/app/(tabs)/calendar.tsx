import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { Calendar, Agenda } from 'react-native-calendars' 



const calendar = () => {
  // const [selected, setSelected] = useState('')
  // const workout = {key: 'workout', color: 'red', selectedDotColor: 'red'} // inputted just for show 
  // const restDay = {key: 'rest', color: 'green', selectedDotColor: 'green'}
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Agenda //decided to use Agenda for visual purposes
          items={{
            '2024-08-21': [{name:'TechWise Meeting', data: 'Meeting for week 6'}],
            '2024-08-20': [{name:'Active Team Meet', data: 'Meeting to discuss and improve App'}]
          }}
          renderItem={(item, isFirst) =>(
            <TouchableOpacity style={styles.item}>
              <Text style={styles.container}>{item.name}</Text>
              <Text style={styles.container}>{item.data}</Text>
            </TouchableOpacity>
          )}
        /> 
      </SafeAreaView>
      {/* <Calendar 
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
      /> */}
      
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
    marginTop: 25,
    paddingBottom:20
  }
})