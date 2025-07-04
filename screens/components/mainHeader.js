import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SellNowPopup from '../../screens/sellNowPopup';


const MainHeader = ({ onPressHome, onPressMyAds, onPressSellNow, onPressMore }) => {
    const navigation = useNavigation();
  const handleHomePress = () => {
    // Replace this with your actual logic for the Home button press
    console.log('Home button pressed');

  };

  const handleMyAdsPress = () => {
    // Replace this with your actual logic for the My Ads button press
    console.log('My Ads button pressed');
    navigation.navigate('sellItMyself');

  };

  const [sellNowPopupVisible, setSellNowPopupVisible] = React.useState(false);

  const handleSellNowPress = () => {
    // Replace this with your actual logic for the Sell Now button press
    console.log('Sell Now button pressed');
    // Set the state to show the Sell Now popup
    setSellNowPopupVisible(true);
  };

  const handleMorePress = () => {
    // Replace this with your actual logic for the More button press
    console.log('More button pressed');
    navigation.navigate('more');
  };

  return (
    <View style={styles.headerContainer}>
      {/* Home Button */}
      <TouchableOpacity style={styles.button} onPress={onPressHome || handleHomePress}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      {/* My Ads Button */}
      <TouchableOpacity style={styles.button} onPress={onPressMyAds || handleMyAdsPress}>
        <Text style={styles.buttonText}>My Ads</Text>
      </TouchableOpacity>

      {/* Sell Now Button */}
      <TouchableOpacity style={styles.button} onPress={onPressSellNow || handleSellNowPress}>
        <Text style={styles.buttonText}>Sell Now</Text>
      </TouchableOpacity>

      {/* More Button */}
      <TouchableOpacity style={styles.button} onPress={onPressMore || handleMorePress}>
        <Text style={styles.buttonText}> More </Text>
      </TouchableOpacity>

      <SellNowPopup
        visible={sellNowPopupVisible}
        onClose={() => setSellNowPopupVisible(false)}
        onSelectCategory={(category) => {
          console.log(`Selected category: ${category}`);
          setSellNowPopupVisible(false); // Close the popup
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'darkred',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainHeader;
