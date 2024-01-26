
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import ImagePicker from 'react-native-image-picker';

const SellItMyself = () => {
    const navigation = useNavigation();

    const [selectedImage, setSelectedImage] = useState(null);

    const handleBackPress = () => {
        // Handle the back button press or navigate back
        console.log('Back button pressed');
        navigation.goBack();
    };
    const handleImagePicker = async () => {
        try {
            const image = await ImagePicker.launchImageLibrary({
                width: 300,
                height: 400,
                cropping: true,
                cropperCircleOverlay: false,
            });
            // Update the selected image state
            setSelectedImage({ uri: image.path });
        } catch (error) {
            console.log('ImagePicker Error: ', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Back button */}
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <Image
                        source={require('../assets/back-arrow.png')}
                        style={styles.backImage}
                    />
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>Sell your car</Text>
            </View>
            <TouchableOpacity style={styles.imageContainer} onPress={handleImagePicker}>
                {selectedImage ? (
                    <Image source={selectedImage} style={styles.selectedImage} />
                ) : (
                    <Text style={styles.placeholderText}>Add Image</Text>
                )}
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'darkred',
        padding: 15,
        height: 60,
    },
    backButton: {
        padding: 5,
    },
    backImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        height: 200,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    selectedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    placeholderText: {
        fontSize: 18,
        color: '#757575',
    },



});

export default SellItMyself;
