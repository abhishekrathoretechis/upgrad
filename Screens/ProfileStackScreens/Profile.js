import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image source={require('../../assests/images/Profilepic.png')} />
        <View>
          <Text style={styles.nameText}>Abhishek Rathore</Text>
          <Text style={styles.emailText}>abhishekrathore@gmail.com</Text>
        </View>
        <Image source={require('../../assests/images/arrow.png')} />
      </View>
      <View style={styles.lower}>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/notifications.png')} />
            <Text style={styles.iconText}>Notifications</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/paymentmethod.png')} />
            <Text style={styles.iconText}>Payment Method</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/rewardscredit.png')} />
            <Text style={styles.iconText}>Reward Credits</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/invitefriends.png')} />
            <Text style={styles.iconText}>Invite Friends</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/trackorder.png')} />
            <Text style={styles.iconText}>Track Order</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/orderhistory.png')} />
            <Text style={styles.iconText}>Order History</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/aboutus.png')} />
            <Text style={styles.iconText}>About Us</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assests/images/signout.png')} />
            <Text style={styles.iconText}>Sign Out</Text>
          </View>
          <View>
            <Image source={require('../../assests/images/arrow.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 0.25,
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(8),
  },
  nameText: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(2.5),
  },
  emailText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
  },
  lower: {
    flex: 0.75,
    backgroundColor: '#ffffff',
  },

  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(2),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(4),
  },
  iconText: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(2.5),
  },
});
