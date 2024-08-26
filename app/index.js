import { useState } from "react";
import { 
  //WS2 Dependecies 
  Text, 
  View, 
  Image,
  ScrollView,
  Button,
 

  //Worshop 3 
  StyleSheet,

} from "react-native";


/*
https://pictogrammers.com/library/mdi/
  Workshop 2: 
  Example 1: Using Props 
  -Basically creating an component that represent a Task item
  - 
  - Creating a component with props will allow reusability, similar to that of objects 
  - Note that props (properties) is the idea of resuing componets for different values
  - Note: each component within 'TaskCar' is treated as div element (its own box)
*/
const TaskCard = props => {
  return (

   <View style > 
      {/* Task Type  */}
      <Text> {props.type} </Text>

     {/*Detials for the task  */}
      <View >
        <Text> Task #: {props.taskNumber}</Text>
        <Text> Task Name: {props.name} </Text>
        <Text> Due Date: {props.date}</Text>
        <Text> Time: {props.time}</Text>
      </View>

    </View>
  );
 }


 /*
  Workshop 2 
  EXAMPLE #3: useState() 
  - a componet that displays a button
  - when pressed, updates the UI 
  - slides will explain how this works 
*/
const Increment = () => {
  const [count, setCount] = useState(0); 
  return(
    <View> 
      <Text>This is a Counter!</Text>
      <Text>Count:{count}</Text>
      <Button
            title='+'
            onPress={() => setCount(count+1)} 
      />
    </View>
    );
 };


 //This is the coomponet that will output the UI on the screen 
 // Think of this as 'main' 
export default function Index() {

  return (

    <ScrollView>
     
 
        { /*
          -EXAMPLE 1 (cont): Using Props/Properties 
          - using the IdCard Component created above
          - below demonstrates the resuability of componets through props
          - componet acts an object for UI, in this case displaying different types of id
        */}
        <Text> Example #1: Properties</Text>
        
        <TaskCard
          type = "Home"
          taskNumber = "1"
          name = "Clean Room"
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

       
        
        {/*
          - EXAMPLE 2: Componenets such Image have props as well
          - For this case, "source is a prop"
          - Demonstrating the use of curly braces in JSC and props 
        */}
      <Image source={require('@/assets/images/partial-react-logo.png')}/>


       {/*
          - EXAMPLE 3: useState() (see above componet )
      */}
      <Text>{'\n'} Example 3:</Text>
      <Increment/>

    </ScrollView>

  ); //End of return 

};//end of Index component  



const styles = StyleSheet.create({
  
  //Style for the id card  (container)
  taskCard: { 
    
    //Box Model adjustments for taskBox
    borderWidth: 3,
    borderColor: '#ff0000', 
    margin: 10,
    padding:5,
    height: 150,
    width: 'auto',

    
    //Layout Adjustments 
    flexDirection: 'row',
   
  } , 


  

});


