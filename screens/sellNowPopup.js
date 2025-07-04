/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
// Popup.js

import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SellNowPopup = ({ visible, onClose, onSelectCategory }) => {
  const navigation = useNavigation();
  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  const handleSelectCategory = (category) => {
    if (onSelectCategory && typeof onSelectCategory === 'function') {
      onSelectCategory(category);

      if (category==='Car'){
        navigation.navigate('sellNowChoosePlan');
      }
    }
  };


  // const handleSelectCategory = (category) => {
  //   if (onSelectCategory && typeof onSelectCategory === 'function') {
  //     onSelectCategory(category);
  
  //     // Check if the selected category is 'Car'
  //     if (category === 'Car') {
  //       // Navigate to Screen 1
  //       navigation.navigate('Screen1'); // Replace 'Screen1' with the actual name of your screen
  //     }
  //   }
  // };



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.modalText}>What do you want to sell?</Text>

          {/* Categories */}
          <View style={styles.categoriesContainer}>
            <TouchableOpacity onPress={() => handleSelectCategory('Car')}>
              <View style={styles.category}>
                {/* Replace the source with your actual image */}
                <Image
                  source={require('../assets/images/car_icon.png')}
                  style={styles.categoryImage}
                />
                <Text style={styles.textDecor}>Car</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSelectCategory('Bike')}>
              <View style={styles.category}>
                {/* Replace the source with your actual image */}
                <Image
                  source={require('../assets/images/bike_icon.png')}
                  style={styles.categoryImage}
                />
                <Text style={styles.textDecor}>Bike</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSelectCategory('Auto Parts')}>
              <View style={styles.category}>
                {/* Replace the source with your actual image */}
                <Image
                  source={require('../assets/images/tools_icon.png')}
                  style={styles.categoryImage}
                />
                <Text style={styles.textDecor}>Parts</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Close modal button */}
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width:330,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  category: {
    alignItems: 'center',
    paddingLeft:5,
  },
  categoryImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginBottom: 10,

  },
  textDecor: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    fontSize: 14,
    color: '#8b0000',
    fontWeight:'bold',
    alignSelf:'flex-end',
  },
});

export default SellNowPopup;
