import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { useFonts } from 'expo-font';


import {StyleSheet}from "react-native";




/*
  - Create layout
  - create each tab and link to the pages
  - stylize addTask
*/


export default function TabLayout() {

 

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    

    {/*Each Tabs.Screen represents a different page */}
    <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

    
    <Tabs.Screen
      name="calendar"
      options={{
        title: 'Calendar',
      }}
    />  

    {/*Primary focus on the tab we'll be creating

      format 

      property: {
        value: 'value'
      }
      
      headerStyle (customizes overall style such as background, height, and border)
        background color
        height
        border boddtomwidth
        borderbottome color
      
      headerTitleStyle (fontfamily, font family size, and color)
        fontFamily
        fontSize
        fontWeight
      
      headerTitleAlign (header)
        center the title
      
      headerBackTitleStyle (styles text  of back button 
        - stylees

      headerBackTitlevisible (determines whetere the back button is visible)
        (boolean value)
        - useful if you want to hide the back button label but keep the icon

      headerShown 
        bool 
        whether is shown
      
      headerLeft
      headerRight
      headerTransparaner
      headerBackground
      headerTitleContainer style
      headerRightContainter Style
      headerShadowVisible
      headerSearch Bat Option 


    */}
    <Tabs.Screen
      name="addTask"

      options={
        {
          title: 'Create Task',
          headerStyle:styles.headerStyles,
          headerTitleStyle: styles.headerFont,
          headerTitleAlign:'center',
        }
      
        
      }

    />

    <Tabs.Screen
      name="sort"
      options={{
        title: 'Sort',
      }}
    />

    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
      }}
    />

    </Tabs>
    
  );
}


const styles = StyleSheet.create ({ 

  headerFont: {
    fontFamily: 'KHGummi',
    textAlign: 'center',
    color: 'white'
  },

  headerStyles:{
    backgroundColor: '#0178fb'
  }

})
