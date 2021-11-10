import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FormTarea from './components/FormTarea';
import ListaTareas from './components/ListaTareas';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [inputError, setInputError] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  

  const handleChangeTarea = (tarea) => {
    setTarea(tarea)
    setInputError('');
 };
  


  const handleAddItem = () => {
    if (tarea) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          tarea: tarea,
          terminada: false
        },
      ]);
      setTarea('');
      setInputError('');
    } else {
      setInputError('Debe Ingresar la tarea');
    }
  };

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }

  const handleFinished = id => {
    const listItemUpdated = itemList.map(item => {
      const updateItem = item;
      if (updateItem.id === id) {
        updateItem.terminada = true;
      }
      return updateItem;
    });
    setItemList(listItemUpdated);
  };

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Lista de Tareas</Text>
      </View>
     
      
      <FormTarea tarea={tarea} inputError={inputError} handleChangeTarea={handleChangeTarea} handleAddItem = {handleAddItem}/>

      <ListaTareas itemList={itemList} handleModal={handleModal}
        handleFinished={handleFinished} />
      
      {
        modalVisible &&
        <ModalComponent modalVisible={modalVisible} itemSelected={itemSelected} handleConfirmDelete={handleConfirmDelete} />
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  tituloContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#023047' 
  }
 });
