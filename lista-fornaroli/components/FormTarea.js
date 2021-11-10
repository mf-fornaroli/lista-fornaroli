import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const FormTarea = (props) => {
 
 const { tarea, inputError, handleChangeTarea, handleAddItem } = props;
 return (
  <View style={styles.inputContainer}>
   
   <TextInput
    placeholder="Ingrese tarea..."
    style={styles.input}
    onChangeText={handleChangeTarea}
    value={tarea}
   />

   <Text style={styles.inputError}>{inputError}</Text>
   
   <Button
    title="AGREGAR TAREA"
    color="#219ebc"
    onPress={handleAddItem}
   />
   
 </View>
      
 )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    margin: 10,
    padding: 10
  },
  inputError: {
   color: 'red',
   margin: 10,
  },
});

export default FormTarea;


