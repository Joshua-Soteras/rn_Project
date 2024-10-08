import {StyleSheet}from "react-native";


const styles = StyleSheet.create ({

    //Style for the Taskcard  (container)
    taskCard: { 
        
        //Box Model adjustments for taskBox
        //borderColor: '#ff0000',  //Use border color to show case the border/boudaries 
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        width: 'auto',
   

        //LAYOUT 
        flexDirection: 'row', //main axis is vertical / cross axis horizontal 
        alignItems: 'center',
        flexWrap: 'wrap',
        flex: 1,

        
        //Shadow 
        //object: {width: number,height: number}
        //elevation: .01

    },



    /*
        itemOne: contains the checkbox
    */
    itemOne: {
        
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        
        backgroundColor:'#f0e7d8',
        height: '100%',
        
        //Layout: 
        flexDirecton: 'column',
        alignItems:'center',
        justifyContent: 'center',
    
    },



    checkBox: {
        
        //Box Model
        borderWidth: 1,
        borderRadius: 10,
        height: 25,
        width: 25,
        margin: 4,
       
        //Layout 
        flexDirecton: 'column',
    
    },



    //item:Two: contains the rest of the content of the task Card
    itemTwo:{

        flexDirection: 'column',
        flex: 2,

    }, 



    taskType: {
        
        //Box Model 
        borderTopRightRadius: 10,
      
        height: 30, 
        width: "100%", 
        padding: 5,

        //Text 
        backgroundColor:  'powderblue', 
        fontFamily: 'KHGummi',
        fontSize : 14
        
    },



    detailsBox: {
        //Box Model
        borderWidth: 1, 
        borderColor: 'black',
      

        //Layout
        //flex will define how your items are going to “fill” over the available space along your main axis. 
        flexDirecton: 'column',
        flex: 2,
    }, 
    

    textDetails: {
        fontSize: 12,
        fontFamily: 'KHMenu'
    },



    buttonDetails: {

      borderWidth: 1,
      borderBlockColor: 'yellow',
      backgroundColor: '#2196F3', 
      margin: 2,
      
      //Text Color
      color: 'white',
      width: 100,
  },

  

  
});

export default styles;


/*

Notes:

        If flexDirection is set to row, the main axis runs horizontally (from left to right).
        If flexDirection is set to column (the default), the main axis runs vertically (from top to bottom).

    alignItems
        Use in the parents conatiner to align the items (children) in regards to the cross axis
        Purpose: Aligns children along the cross-axis within the parent container. It applies to individual child elements and is used when there is only one row or column of content.
    
        alignSelf 
     on the child element: This property can be applied to individual child elements to override the parent's alignItems value.

    alignContent
        Purpose: Aligns multiple lines of content along the cross-axis. It only applies when the children wrap into multiple lines using the flexWrap property.
        When to use: Use it when you have multiple rows or columns of wrapped content, and you want to control how these rows/columns are aligned within the container. 

    justifyContent
        In React Native, to align children along the main axis, you use the justifyContent property. The main axis is defined by the flexDirection of the parent container:

        
*/


/*

  Flat List

    Steps 1: 
        - Import Flat List Componnet from react native
            - import {FlatList} from 'react-native'
    Step2:

*/