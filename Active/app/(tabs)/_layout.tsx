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
                style={{width:40,height:40}}
                source={require('../../assets/images/home.png')}
                
              />
            )
          }

          }}/>
          <Tabs.Screen name="goals" options={{title:"Goals",
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width:40,height:40}}
                  source={require('../../assets/images/goalpost.png')}
                  
                />
              )
            }
          }}/>
          <Tabs.Screen name="calendar" options={{title: "Calendar",
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width:40,height:40}}
                  source={require('../../assets/images/calendar.png')}
                  
                />
              )
            }
          }}/>
          <Tabs.Screen name="profile" options={{title: "Profile",
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width:40,height:40}}
                  source={require('../../assets/images/profileicon1.png')}
                  
                />
              )
            }
          }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})