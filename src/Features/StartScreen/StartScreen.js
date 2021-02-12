import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

const StartScreen = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/brexit.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
        <View style={styles.header}>
          <Text style={styles.headerText}>LET'S KNOW SOME INTERESTHING THING ABOUT BREXIT</Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txt}>Let's Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;
