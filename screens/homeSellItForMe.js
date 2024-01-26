import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook from react-navigation
import HorizontalScrollItem from './horizontallScrollItems';
import ManagedByAutoFinder from './components/managedByAutoFinder';

const homeSellItForMe = () => {

    const navigation = useNavigation();

    const FeatureLine = ({ imageSource, text }) => (
        <View style={styles.featureLine}>
            <Image source={imageSource} style={styles.featureImage} />
            <Text style={styles.featureText}>{text}</Text>
        </View>
    );
    const WorksellForItForMe = ({ imageSource, text }) => (
        <View style={styles.worksellForItForMeLine}>
            <Image source={imageSource} style={styles.worksellForItForMeImage} />
            <Text style={styles.worksellForItForMeText}>{text}</Text>
        </View>
    );
    // const navigation = useNavigation();
    const handleBack = () => {
       navigation.goBack();
    };
    const handleBegin = () => {
        // Begin button is pressed
        console.log("begin pressed")
    };
    const handleHorizontalItemPress = (itemId) => {
        // Handle the press event for the specific item (optional)
        // console.log(Item ${itemId} pressed);
      };
      const handlePostAdRightAway = () => {
        // Begin button is pressed
        console.log("handlePostAdRightAway");
        navigation.navigate('sellNowChoosePlan');

    };

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>

                    <Image
                        source={require('../assets/back-arrow.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>

                    <Text style={styles.title}>AutoFinder Sell It For Me</Text>
                </View>
            </View>
            <ScrollView>
                <Image
                    source={require('../assets/sellitforme.jpg')}
                    style={styles.image}
                />
                <Text style={styles.addText}>AutoFinder Sell It For Me</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleBegin}
                >
                    <Text style={styles.buttonText}>Begin</Text>
                </TouchableOpacity>

                <Text style={styles.addTextChoose}>Why choose AutoFinder sell it for me?</Text>

                <FeatureLine imageSource={require('../assets/salesManagerr.png')} text="Responsible sales manager" />
                <FeatureLine imageSource={require('../assets/troublefree.png')} text="Trouble-free" />
                <FeatureLine imageSource={require('../assets/bestprice.png')} text="Obtain the finest price" />
                <FeatureLine imageSource={require('../assets/transaction.png')} text="Ensure safe transactions" />

                <Text style={styles.sellWorkText}>How sell it for me works?</Text>

                <WorksellForItForMe imageSource={require('../assets/number-1.png')} text="Sign Up for Sell it for me" />
                <WorksellForItForMe imageSource={require('../assets/number-2.png')} text="Our team inspect, capture, advertise your car" />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="Ad featured on AutoFinder platform" />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="We manage calls, entertainment for you" />
                <WorksellForItForMe imageSource={require('../assets/number-3.png')} text="We secure your payment post-deal" />

                {/* here we can calll componet from home screen,  */}
                
                <View>
                <ManagedByAutoFinder />
                </View>

                <Text style={styles.sellWorkText}>AutoFinder Offerings</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="AutoFinder Car Inspections"
                        content="200+ point inspections for peace of mind"
                        onPress={() => handleHorizontalItemPress(1)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Auction Sheet Verifications"
                        content="AutoFinder guarantees confidence with verified Japanese car auction sheets"
                        onPress={() => handleHorizontalItemPress(2)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Maintain Your Car"
                        content="Track your car's service history with SMS reminders"
                        onPress={() => handleHorizontalItemPress(3)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Car Finance"
                        content="Explore and apply for car loans effortlessly"
                        onPress={() => handleHorizontalItemPress(4)}
                    />
                    <HorizontalScrollItem
                        imageSource={require('../assets/Registration.png')}
                        title="Car Insurance"
                        content="Secure your ride with easy car insurance comparison and application"
                        onPress={() => handleHorizontalItemPress(5)}
                    />
                </ScrollView>

                <Text style={styles.sellWorkText}>Looking to Sell Your Car?</Text>

                <View style={styles.roundedViewsContainer}>
                <View style={styles.roundedView}>
                    <Text style={styles.roundedViewText}>Sell today!</Text>
                    <Text style={styles.subtext}>Place your ad to uncover the best offer from our potential buyers</Text>
                    <TouchableOpacity><Text style={styles.textButton} onPress={handlePostAdRightAway}>Post an Ad right away</Text></TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'darkred',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    backButton: {
        paddingRight: 20,
        tintColor: 'white',
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    addText: {
        textAlign: 'center',
        padding: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    button: {
        backgroundColor: 'darkred',
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    addTextChoose: {
        marginLeft: 10,
        padding: 10,
        color: 'firebrick',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    featureLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,

    },
    featureImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        // tintColor: 'darkred'
    },
    featureText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    sellWorkText: {
        marginLeft: 10,
        padding: 10,
        color: 'firebrick',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    worksellForItForMeLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
    },
    worksellForItForMeImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        tintColor: 'darkred'
    },
    worksellForItForMeText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'grey'
    },
    horizontalScroll: {
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    roundedViewsContainer: {
        flexDirection: 'column',
        marginTop: 5,
        alignItems: 'center',
        // borderColor: 'darkred'
    },
    roundedView: {
        backgroundColor: 'white',
        borderRadius: 10,
        // borderBlockColor: 'darkred',
        padding: 10,
        width: 350,
        height: 120,
        margin: 20,
    },
    roundedViewText: {
        fontSize: 16,
        color: 'firebrick',
        fontWeight: 'bold',
        marginTop: 1
    },
    subtext: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10,
    },
    textButton:{
        marginTop: 20,
        color : 'royalblue'
    }
});


export default homeSellItForMe;