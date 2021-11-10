import React from 'react';
import { FlatList } from 'react-native';
import Tarea from './Tarea';

const ListaTareas = (props) => {
 const { itemList, handleModal, handleFinished } = props;
 return (
  <FlatList
   data={itemList}
   renderItem={data => {
    return (
     <Tarea item={data.item} handleModal={handleModal}
      handleFinished={handleFinished}/>
    );
   }}
   keyExtractor={item => item.id}
  />
  );
 }
  
 export default ListaTareas;
