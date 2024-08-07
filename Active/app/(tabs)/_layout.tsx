import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'




const TabsLayout = () => {
  return (
    <>
        <Tabs >
          <Tabs.Screen name="home" options={{title:"Home",
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width:50,height:50}}
                source={require('../../assets/images/home.png')}
                
              />
            )
          }

          }}/>
          <Tabs.Screen name="goals" options={{title:"Goals"}}/>
          <Tabs.Screen name="calendar" options={{title: "Calendar"}}/>
          
        </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})