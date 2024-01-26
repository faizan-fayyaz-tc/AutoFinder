// /* eslint-disable prettier/prettier */
// /* eslint-disable no-dupe-keys */
// /* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import home_AutoFinderOffer_CarInspection from './stack/home_AutoFinderOffer_CarInspection';

const AutoFindersOffering = () => {

  const navigation = useNavigation();

  const data = [
    { id: 1, label: 'Autofinder Services', label2: 'Free Ads', image: require('../../assets/images/free_ads.png') },
    { id: 2, label: 'Autofinder Services', label2: 'Premium Ads', image: require('../../assets/images/premium_ads.png') },
    { id: 3, label: 'Autofinder Services', label2: 'List It For You', image: require('../../assets/images/list_it_for_you.png') },
    { id: 4, label: 'Autofinder Services', label2: 'Car Inspection', image: require('../../assets/images/car_inspection.png') },
    { id: 5, label: 'Autofinder Services', label2: 'Buy Car For Me', image: require('../../assets/images/buy_car_for_me.png') },
    { id: 6, label: 'Autofinder Services', label2: 'Rent A Car', image: require('../../assets/images/rent_car.png') },
  ];
  const renderTouchableOpacities = () => {
    const touchableOpacities = [];

    for (let i = 0; i < 3; i++) {
      const rowItems = [];
      for (let j = 0; j < 2; j++) {
        const index = i * 2 + j;
        if (index < data.length) {
          rowItems.push(
            <TouchableOpacity
              key={data[index].id}
              style={styles.touchableOpacity}
              // onPress={() => console.log(`Item ${data[index].id} pressed`)}
              onPress={() => handleItemPress(data[index])}
            >
              <Image source={data[index].image} style={styles.image} />
              <Text style={styles.label}>{data[index].label}</Text>
              <Text style={styles.label2}>{data[index].label2}</Text>
            </TouchableOpacity>
          );
        }
      }
      touchableOpacities.push(
        <View key={i} style={styles.row}>
          {rowItems}
        </View>
      );
    }
    return touchableOpacities;
  };

  const handleItemPress = (item) => {
    switch (item.id) {
      case 1:
        // Navigate to screen for id-1
        navigation.navigate('homeCarInspection');
        break;
      case 2:
        // Navigate to screen for id-2
        navigation.navigate('homeCarInspection');
        break;
      case 3:
        // Navigate to screen for id-3
        // navigation.navigate('homeCarInspection');
        break;
      case 4:
        // Navigate to car inspections screen for id-4
        navigation.navigate('homeCarInspection');
        break;
      case 5:
        // Navigate to screen for id-5
        navigation.navigate('homeBuyCarForMe');
        break;
      case 6:
        // Navigate to screen for id-6
        navigation.navigate('homeCarInspection');
        break;
      default:
        // Handle press for other items if needed
        console.log(`Item ${item.id} pressed`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Auto Finders Offering :</Text>
        <View style={styles.line} />
      </View>
      {renderTouchableOpacities()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 40,
  },
  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'firebrick',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'firebrick', 
    marginTop: 5,
    width: 370,
  },
  row: {
    flexDirection: 'row',
  },
  touchableOpacity: {
    width: 165,
    height: 210,
    margin: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'firebrick',
    borderWidth: 1
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    //fontWeight: 'bold',
    color: '#000000',
  },
  label2: {
    marginTop: 2,
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    color: '#661400',
  },
});

export default AutoFindersOffering;
