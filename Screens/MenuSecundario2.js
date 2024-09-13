// Screens/MenuSecundarioScreen.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Datos del menú secundario
const dishes = [
  { id: '1', name: 'Guisado 1', icon: 'restaurant-menu' },
  { id: '2', name: 'Guisado 2', icon: 'restaurant-menu' },
  { id: '3', name: 'Guisado 3', icon: 'restaurant-menu' },
  { id: '4', name: 'Guisado 4', icon: 'restaurant-menu' },
  { id: '5', name: 'Guisado 5', icon: 'restaurant-menu' },
  { id: '6', name: 'Guisado 6', icon: 'restaurant-menu' }
];

// Tamaño de la pantalla
const { width } = Dimensions.get('window');

const MenuSecundario2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guisados</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {dishes.map(item => (
          <TouchableOpacity key={item.id} style={styles.button}>
            <Icon name={item.icon} size={50} color="#fff" />
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ea',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - 20, // Ajusta el ancho del botón según sea necesario
    height: width / 3 - 20, // Mantiene el aspecto cuadrado del botón
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default MenuSecundario2;
