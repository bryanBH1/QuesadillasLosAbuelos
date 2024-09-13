// Screens/MenuScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Datos del menú
const dishes = [
  { id: '1', name: 'Tacos', icon: 'fastfood' },
  { id: '2', name: 'Burritos', icon: 'restaurant' },
  { id: '3', name: 'Enchiladas', icon: 'local-dining' },
  { id: '4', name: 'Quesadillas', icon: 'star' },
  { id: '5', name: 'Sopes', icon: 'kitchen' }
];

// Tamaño de la pantalla
const { width } = Dimensions.get('window');

const MenuScreen = ({ navigation }) => {
  const handlePress = (dishId) => {
    if (dishId === '1' || dishId === '2' || dishId === '3') {
      // Navega a MenuSecundarioScreen para las primeras tres opciones
      navigation.navigate('MenuSecundario');
    } else {
      // Puedes agregar lógica adicional para las otras opciones si es necesario
    }
    if (dishId === '4' || dishId === '5') {
        // Navega a MenuSecundarioScreen para las primeras tres opciones
        navigation.navigate('MenuSecundario2');
      } else {
        // Puedes agregar lógica adicional para las otras opciones si es necesario
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUESADILLAS LOS ABUELOS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {dishes.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.button}
            onPress={() => handlePress(item.id)}
          >
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

export default MenuScreen;
