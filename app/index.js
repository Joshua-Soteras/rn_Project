import { useState } from "react";
import { 
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
  Example 1: Using Props 
  -Basically creating an component that represents an ID
  - Creating a component with props will allow reusability, similar to that of objects 
  - Note that props (properties) is the idea of resuing componets for different values
*/
const IdCard = props => {
  return (
   <View style =  { styles.idCard}> 

      <Image 
        style = {styles.idPhoto}
        source={require('@/assets/images/insertPhoto.png')}
        resizeMode="contain"
        />

      <View style = {styles.idInfo}>
        <Text> Name: {props.name} </Text>
        <Text> ID #: {props.idNum}</Text>
        <Text> Major: {props.major}</Text>
      </View>

    </View>
  );
 }


 /*
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
export default function Index() {

  //This for Example 2 used below
  //Download this image manually or used another
  //You can grab the file path by clicking on image within the folder and getting file path 
  return (

    <ScrollView>
     
 
        { /*
          -EXAMPLE 1 (cont): Using Props/Properties 
          - using the IdCard Component created above
          - below demonstrates the resuability of componets through props
          - componet acts an object for UI, in this case displaying different types of id
        */}
        <Text> Example #1: Properties</Text>
        <Text> Student Registry </Text>
        <IdCard name = "John Doe" idNum = {1} major = "Computer Science" />
        <IdCard name = "Sheldon Cooper " idNum = {2} major = 'Physics' /> 
        <IdCard name = "Carl Gauss" idNum = {3}  major = "Mathematics " />
        <IdCard name = "Bruce Wayne" idNum = {3}  major = "Forensics " />
        <IdCard name = "Naruto Uzamaki" idNum = {3}  major = "Art" />
        <IdCard name = "Peter Parker" idNum = {3}  major = "Physics" />


        {/*
          - EXAMPLE 2: Componenets such Image have props as well
          - For this case, "source is a prop"
          - Demonstrating the use of curly braces in JSC and props 
        */}
      <Image source={require('@/assets/images/partial-react-logo.png')}/>


       {/*
          - EXAMPLE 3: useState()
      */}
      <Text> Example 3:</Text>
      <Increment/>

    </ScrollView>

  ); //End of return 

};//end of Index component  

const styles = StyleSheet.create({
  
  //Style for the id card  (container)
  idCard: { 
    
    //Box Model adjustments 
    borderWidth: 3,
    borderColor: '#ff0000', 
    margin: 10,
    padding:5,

    height: 150,
    width: 'auto',
  
    flexDirection: 'row',
   
  } , 

  //Style the photo area on the ID card 
  idPhoto: {
    
    borderWidth: 3, 
    borderColor: 'blue',
    height: 100, 
    width: 100,
    flex: .25
  },

  //Style
  idInfo: {
    flex: .75,
    borderWidth: 3, 
    borderColor: 'yellow',
  }

});

/*

*/
