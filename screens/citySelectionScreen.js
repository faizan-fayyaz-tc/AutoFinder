// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const citySelectionScreen = ({ navigation, onSelectCity }) => {
//   const cities = ['Rawalpindi', 'Islamabad', 'Lahore', 'Karachi']; // Add more cities if needed

//   const handleCitySelection = (city) => {
//     onSelectCity(city);
//     navigation.closeDrawer();
//   };

//   return (
//     <View style={styles.container}>
//       {cities.map((city) => (
//         <TouchableOpacity
//           key={city}
//           style={styles.cityItem}
//           onPress={() => handleCitySelection(city)}
//         >
//           <Text>{city}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20, // Adjust the padding as needed
//   },
//   cityItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     width: '100%',
//     alignItems: 'center',
//   },
// });

// export default citySelectionScreen;