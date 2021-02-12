import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from '../SuccessScreen/styles';

const FailedScreen = (props) => {
  const { navigation } = props;
  const { level } = props.route.params

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/fail.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
        <View style={[styles.successHeader, {width: '60%', padding: 20, borderTopRightRadius:15, borderBottomRightRadius: 15}]}>
          <Text style={[styles.headerText, {fontSize: 70}]}>Sorry</Text>
        </View>
        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/animation/failed.json')}
            autoPlay
            loop
            style={styles.animation2}
          />
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quiz about brexit', {level: level})}>
            <Text style={styles.txt}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txt}>Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FailedScreen;
