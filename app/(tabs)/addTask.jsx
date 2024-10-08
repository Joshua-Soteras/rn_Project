import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button,
  ScrollView
} from 'react-native';

import { useState } from "react";




/*

const newObject = {
  "name": "Emily",
  "age": 22,
  "city": "Berlin"
};

// Add the new object to the array
sampleData.push(newObject);
*/




const addTask = props => {

   // State for each input field
   const [type, setType] = useState('');

   const [taskNumber, setTaskNumber] = useState('');

   const [name, setName] = useState('');

   const [taskLevel, setTaskLevel] = useState('');

   const [date, setDate] = useState('');

   const [time, setTime] = useState('');

   const handleSubmit =() => {
    const taskData = {
      type,
      taskNumber,
      name,
      taskLevel,
      date,
      time,
    };
  };

  return (
    <View>
      <Text>ADD TASK PAGE=</Text>

    <ScrollView>
      <View> 
        <Text style={styles.label}>Type:</Text>
        <TextInput
          style={styles.input}
          value={type}
          onChangeText={setType}
        />

        <Text style={styles.label}>Task Number:</Text>
        <TextInput
          style={styles.input}
          value={taskNumber}
          onChangeText={setTaskNumber}
          keyboardType="numeric" // Assuming task number is numeric
        />

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Task Level:</Text>
        <TextInput
          style={styles.input}
          value={taskLevel}
          onChangeText={setTaskLevel}
          keyboardType="numeric" // Assuming task level is numeric
        />

        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="MM/DD/YY" // Example placeholder
        />

        <Text style={styles.label}>Time:</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="HH:MM"
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>

    </View> 

  )
};

export default addTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

