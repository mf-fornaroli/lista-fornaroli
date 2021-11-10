import React, { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Tarea = (props) => {

 const { item, handleModal, handleFinished } = props;
 
 return (
  
   <View style={!item.terminada ? [styles.item, styles.shadow] : [styles.item, styles.itemFinished]}>
    <Text>{item.tarea}</Text>
 
    { !item.terminada &&
     <Button
      title="TERMINAR"
      color="#90be6d"
      onPress={() => handleFinished(item.id)}/>
   }
   <Button
     title="X"
     color="#540b0e"
     onPress={() => handleModal(item.id)}
   />
  </View>
 
 );
}
const styles = StyleSheet.create({
 items: {
   marginTop: 20,
  },
 item: {
   padding: 10,
   marginTop: 10,
   marginBottom: 10,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderColor: 'black',
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: 'white',
  },
 itemFinished: {
   padding: 10,
   marginTop: 10,
   marginBottom: 10,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderColor: 'black',
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: '#90be6d'
 },
 shadow: {
   shadowColor: "#000",
   shadowOffset: {
    width: 0,
    height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5,
 },
});

export default Tarea;
