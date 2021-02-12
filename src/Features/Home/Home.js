import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from "./style";
import LottieView from 'lottie-react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';


export default function Home(props) {

  const renderButtons = (name, no) => {

    return (
      <>
        <TouchableOpacity style={styles.buttonView} onPress={() => (props.navigation.navigate(name))}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      </>
    )
  }

  const HomeAnimation = () => {

    return (
      <View style={styles.animationBox}>
        <LottieView
          source={require('../../assets/animation/uk.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    )
  }


  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/brexit.jpg')}>
      <View style={styles.mainView}>
        <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
        <View style={styles.homeHeader}>
          <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
            <BackIcon name="arrow-back" size={20} color='white' />
          </TouchableOpacity>
          <Text style={styles.headrtxt}>Home</Text>
        </View>
        <View style={styles.homeMainView}>
          <Text style={styles.mainHeading}>KNOW ABOUT BREXIT</Text>
        </View>
        {HomeAnimation()}
        <View style={styles.container}>
          {renderButtons('What is brexit', 1)}
          {renderButtons('Why is brexit')}
          {renderButtons('Key Points of deal', 1)}
          {renderButtons('Benefits of brexit')}
          {renderButtons('Quiz about brexit')}

        </View>
      </View>
    </ImageBackground>
  )
}
