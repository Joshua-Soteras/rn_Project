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


import Checkbox from 'expo-checkbox';



/*
  WS3 Adding styles
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
      
      {/* 
        Task Type
        Change Added
        note how i used an array here to inherit the parent style (taskCard)
      */}
    <Text style= {styles.taskType}>{props.type}</Text> 
    
    <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          style={styles.checkBox}
        />


      
      
     {/*Details for the task  */}
      <View >
        
        <Text> Task Name: {props.name} </Text>
        
        {/*Button to toggle details*/}
        <Button 
          title={showDetails ? "Hide Details" : "Show Details"} 
          onPress={() => setDetails(!showDetails)}
        /> 
        {showDetails && (
            <View>
              <Text> Task #: {props.taskNumber}</Text>
              <Text> Due Date: {props.date}</Text>
              <Text> Time: {props.time}</Text>
           </View>
        )}
     
        
      </View>

    </View> //taskCard view (the parent that encapsulates everything )
  );
 }


 
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
  
  //Style for the Taskcard  (container)
  taskCard: { 
    
   
    //Box Model adjustments for taskBox
    //borderColor: '#ff0000',  //Use border color to show case the border/boudaries 
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    height: 150,
    width: 'auto',

    //LAYOUT 
    flexDirection: 'row', //main axis is vertical / cross axis horizontal 
    
    flexWrap: 'wrap',
    //Shadow 
    //object: {width: number,height: number}
    //elevation: .01
 

  },
  

  taskType: {
    
    backgroundColor:  'powderblue', 
    fontSize : 18,
    fontWeight: 'bold',
    width: '100%', 

    //Layout 
    flexBasis: '500', 
    
  
   

    //Box Model 
    

  },

  checkBox: {
    borderWidth: 1,
    borderRadius: 10,
  }




  

});


