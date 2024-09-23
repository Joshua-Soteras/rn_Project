import { useState } from "react";
import { 
  //WS2 Dependecies 
  Text, 
  View, 
  Image,
  ScrollView,
  Button,
 
  //Worshop 3 
  TouchableOpacity,
  FlatList 
   
} from "react-native";

import styles from "./styles";

import sampleData from './sampleData.json'

/*
  Read Me: 
    The order in which this lab was created matters. 

    PART 1. Styling the "Task Card Component"
      - We create the stylesheet: see styles.jsx. 
      - We also apply the styles using the style prop and the values come from the styles.jsx

    PART 2. Using Scroll View and .map function to represent list items
      - create the sampleData.json file

    PART 3. Using Flat List
*/

/*
  WS3 Adding styles to our task items 
*/
const TaskCard = props => {

  
  /*
    State: showing and hiding details
    - default is set to false
    - if user clicks on button, details will be shown
  */
  const [showDetails , setDetails] = useState(false); 

  /**
   * Used for Check Box task compeletion 
   */
  const [isChecked, setChecked] = useState(false); 
  
  
  return (
  
   <View style =  {styles.taskCard}> 


      {/* Row Item One: Check Box */}
      <View style = {styles.itemOne}> 
        <TouchableOpacity style = {styles.checkBox}> 
        </TouchableOpacity>
      </View>
      

      {/* Row Item Two: Details Box */}
      <View  style ={styles.itemTwo}> 

        {/*Task Type */}
        <Text style= {styles.taskType}> {props.type} </Text> 

        {/*Details for the task */}
        <View style = {styles.details}>
          
          <Text style ={styles.textDetails}> Task Name: {props.name} </Text>
      
          <TouchableOpacity 
            style = {styles.buttonDetails} 
            onPress={() => setDetails(!showDetails)}
          >
              <Text style ={styles.textDetails}> {showDetails ? "Hide Details" : "Show Details"}</Text> 
          </TouchableOpacity>

          {showDetails && (
              <View>
                <Text style ={styles.textDetails}> Task#: {props.taskNumber}</Text>
                <Text style ={styles.textDetails}> Task Priority Level:{props.taskLevel}</Text>
                <Text style ={styles.textDetails}> Due Date: {props.date}</Text>
                <Text style ={styles.textDetails}> Time: {props.time}</Text>
              </View>
          )}

        </View>

      </View> 
      
    </View> 

  );
 };


 //This is the coomponet that will output the UI on the screen 
 // Think of this as 'main' 
export default function Index() {

  return (

    <View>
  
      { /*
          PART 1: Showing the styles applyied these TasK Cards 
          The items below are from WS2 
          We will be using these to represent PART 1 of the WS
      */}
      {/*
      <ScrollView>
        <TaskCard
          type = "Home"
          taskNumber = "1"
          name = "Clean Room"
          taskLevel = "3"
          date = "03/02/23"
          time= "4:00pm "
        />
          
        <TaskCard
        type = "College"
        taskNumber = "2"
        name = "Finish Calculus Homework"
        date = "03/03/23"
        time= "11:59pm "
        />
        
        <TaskCard
        type = "Execrcise "
        taskNumber = "3"
        name = "Leg Day "
        date = "03/02/23"
        time= "4:20pm "
        />
      </ScrollView>
      */}


    
      {/* PART 2: Representing Lists through .map */}
      {/*
      <ScrollView>
        {sampleData.map((task) => {
          return(
            <TaskCard
              type = {task.type}
              taskNumber = {task.taskNumber}
              name = {task.name}
              taskLevel = {task.taskLevel}
              date = {task.date}
              time= {task.time}
            />
          );
        })}
      </ScrollView>
      */}
        

    
      {/*
        Step 1: 
          import the librar Flat List 

        Step 2 
          - 'data' prop is used to pass the array of items
      
          -'renderItem' prop is a function returns the jsx that renders each item in the list
            - the function returns the current item within the array 
            - similar to the .map method we can set how the item is rendered

          -console.log verifyies that how flat list works 
      */}
      {/*PART 3: Using Flat-List*/}
      <FlatList
        
          data={sampleData}
          renderItem = {({item}) => {
           console.log(item.name);
            return (
              <TaskCard
                type = {item.type}
                taskNumber = {item.taskNumber}
                name = {item.name}
                taskLevel = {item.taskLevel}
                date = {item.date}
                time= {item.time}
              />
            );
          }}
      /> 
      
    </View>

  ); //End of return 

};//end of Index component  


