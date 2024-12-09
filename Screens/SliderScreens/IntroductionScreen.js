import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const IntroductionScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Slider');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assests/images/introPic.png')} />
      <Text style={styles.headingText}>Welcome to Bhook</Text>
      <Text style={styles.subHeadingText}>Eat. Drink. Love.</Text>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF640D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(4),
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: responsiveScreenHeight(1),
  },
  subHeadingText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: responsiveScreenHeight(1),
  },
});
