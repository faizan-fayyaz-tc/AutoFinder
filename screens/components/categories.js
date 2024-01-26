/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, TouchableOpacity, Image, Text, View, Alert } from 'react-native';

const Categories = () => {
  // Dummy data for categories with 25 items
  const categoriesData = [
    { id: 1, image: require('../../assets/images/bike_icon.png'), label: 'Automatic cars' },
    { id: 2, image: require('../../assets/images/car_icon.png'), label: 'Family cars' },
    { id: 3, image: require('../../assets/images/car_icon.png'), label: 'Small cars' },
    { id: 4, image: require('../../assets/images/car_icon.png'), label: 'Imported cars' },
    { id: 5, image: require('../../assets/images/car_icon.png'), label: 'big cars' },
    { id: 6, image: require('../../assets/images/car_icon.png'), label: 'Old cars' },
    { id: 7, image: require('../../assets/images/car_icon.png'), label: '1300cc' },
    { id: 8, image: require('../../assets/images/car_icon.png'), label: '1000cc' },
    { id: 9, image: require('../../assets/images/car_icon.png'), label: '660cc' },
    { id: 10, image: require('../../assets/images/car_icon.png'), label: 'jeep' },
    { id: 11, image: require('../../assets/images/car_icon.png'), label: '5 door' },
    { id: 12, image: require('../../assets/images/car_icon.png'), label: '4 door' },
    { id: 13, image: require('../../assets/images/car_icon.png'), label: '2 door' },
    { id: 14, image: require('../../assets/images/car_icon.png'), label: '5 seater' },
    { id: 15, image: require('../../assets/images/car_icon.png'), label: '7 seater' },
    { id: 16, image: require('../../assets/images/car_icon.png'), label: '8 seater' },
    { id: 17, image: require('../../assets/images/car_icon.png'), label: 'Japanese cars' },
    { id: 18, image: require('../../assets/images/car_icon.png'), label: 'Diesel cars' },
    { id: 19, image: require('../../assets/images/car_icon.png'), label: 'Hybrid cars' },
    { id: 20, image: require('../../assets/images/car_icon.png'), label: 'Cheap cars' },
    { id: 21, image: require('../../assets/images/car_icon.png'), label: 'Van' },
    { id: 22, image: require('../../assets/images/car_icon.png'), label: 'Modified cars' },
    { id: 23, image: require('../../assets/images/car_icon.png'), label: 'Duplicate File' },
    { id: 24, image: require('../../assets/images/car_icon.png'), label: 'Duplicate Number' },
    { id: 25, image: require('../../assets/images/car_icon.png'), label: 'Urgent' },
    // Add more categories as needed
  ];

  const touchableOpacitySize = 120; // Set your desired size for TouchableOpacity

  const handleCategoryPress = (categoryId) => {
    // Replace this with your desired functionality
    Alert.alert(`Category ${categoryId} pressed`);
  };

  const renderCategory = (category) => (
    <TouchableOpacity
      key={category.id}
      style={[styles.touchableOpacity, { width: touchableOpacitySize, height: touchableOpacitySize }]}
      onPress={() => handleCategoryPress(category.id)}
    >
      <View style={styles.container}>
        <Image
          source={category.image}
          style={styles.image}
        />
        <Text style={styles.label}>
          {category.label}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={[styles.heading, { color: 'red' }]}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
      >
        {categoriesData.map(renderCategory)}
      </ScrollView>
    </View>
  );
};

const styles = {
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft: 5,
  },
  touchableOpacity: {
    marginRight: -30,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    height:100,
    width:80,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',  // Center content horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '60%', // Adjust as needed
    aspectRatio: 1, // Ensure the aspect ratio is 1:1
    borderRadius: 8,
  },
  label: {
    marginTop: 8,
    textAlign: 'center',
    color: '#8c8c8c', // Set label color to black
    //textShadowColor: 'rgba(0, 0, 0, 0.75)',
    //textShadowOffset: { width: -1, height: 1 },
    //textShadowRadius: 10,
  },
};

export default Categories;
