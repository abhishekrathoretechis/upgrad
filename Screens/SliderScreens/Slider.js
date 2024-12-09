import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const Slider = ({navigation}) => {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: require('../../assests/images/swiper1.png'),
      text: 'Welcome to the App',
      textSub:
        'Food delivery app that helps you to get the best dishes quickly and in time from your nearest restaurant.',
    },
    {
      id: 2,
      image: require('../../assests/images/swiper2.png'),
      text: 'Discover New Features',
      textSub:
        'We offer 45 minutes delivery guarantee or the food will be delivered for free.',
    },
    {
      id: 3,
      image: require('../../assests/images/Swiper3.png'),
      text: 'Get Started Now!',
      textSub:
        'Your order will be immediately collected and sent by our courier.',
    },
  ];

  const handleSkip = () => {
    navigation.navigate('BottomTabNavigator');
  };

  const handleNext = index => {
    if (index < slides.length - 1) {
      swiperRef.current.scrollBy(1);
    } else {
      navigation.navigate('BottomTabNavigator');
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination
        paginationStyle={{bottom: 60}}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        {slides.map((slide, index) => (
          <View style={styles.slide} key={slide.id}>
            <Image source={slide.image} style={styles.image} />
            <Text style={styles.text}>{slide.text}</Text>
            <Text style={styles.textSub}>{slide.textSub}</Text>
            {slide.id === 3 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('BottomTabNavigator')}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => handleNext(swiperRef.current.state.index)}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: responsiveScreenWidth(2),
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(4),
    marginTop: responsiveScreenHeight(2),
  },
  textSub: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
    textAlign: 'center',
    marginTop: responsiveScreenHeight(1),
  },
  dot: {
    backgroundColor: 'black',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 25,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  button: {
    marginTop: responsiveScreenHeight(3),
    paddingVertical: responsiveScreenHeight(1.5),
    paddingHorizontal: responsiveScreenWidth(10),
    backgroundColor: '#FF640D',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: 'Proxima Nova Alt Bold',
    textAlign: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(5),
    position: 'absolute',
    bottom: responsiveScreenHeight(2),
    width: '100%',
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    fontSize: responsiveScreenFontSize(2.2),
    color: 'black',
    fontFamily: 'Proxima Nova Alt Regular',
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextButtonText: {
    fontSize: responsiveScreenFontSize(2.2),
    color: 'black',
    fontFamily: 'Proxima Nova Alt Regular',
  },
});

export default Slider;
