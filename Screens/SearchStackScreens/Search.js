import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {itemsNew} from '../../utils/data';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = itemsNew.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      <View style={{marginBottom: responsiveScreenHeight(2)}}>
        <Text style={styles.headingText}>
          Search result based on "{searchQuery}"
        </Text>
      </View>

      {filteredItems.map(item => (
        <View key={item.id} style={styles.listContainer}>
          <View style={styles.imageContainerList}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.textContainerList}>
            <Text style={styles.itemHeadingText}>{item.title}</Text>
            <Text style={styles.itemSubHeadingText}>{item.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.itemPriceText}>{item.price}</Text>
              <TouchableOpacity style={styles.leftContainer}>
                <Text style={styles.itemLeftText}>{item.left}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(4),
  },
  headingContainer: {
    gap: responsiveScreenHeight(1),
  },

  heading: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(7),
  },
  subHeading: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(3),
  },
  textInputContainer: {
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(2),
  },
  input: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: responsiveScreenWidth(4),
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
    borderRadius: 10,
  },
  carouselContainer: {
    marginTop: responsiveScreenHeight(3),
    marginBottom: responsiveScreenHeight(5),
  },
  imageContainer: {
    width: responsiveScreenWidth(28),
    borderRadius: 10,
    overflow: 'hidden',
  },

  itemContainer: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(22),
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: responsiveScreenHeight(2),
  },
  imageContainerNew: {
    width: '100%',
    height: '50%',
  },
  imageNew: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 8,
  },
  itemHeadingText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2.5),
  },
  itemSubHeadingText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
  },
  itemPriceText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
  },
  leftContainer: {
    backgroundColor: '#FF640D',
    padding: 5,
    borderRadius: 5,
    marginTop: responsiveScreenHeight(1),
  },
  itemLeftText: {
    fontFamily: 'Proxima Nova Alt Regular',
    fontSize: responsiveScreenFontSize(2),
    color: 'white',
  },
  carouselContainerNew: {
    paddingHorizontal: responsiveScreenWidth(2),
  },
  popularDishText: {
    fontFamily: 'Proxima Nova Alt Semibold',
    fontSize: responsiveScreenFontSize(3),
  },
  seeAllText: {
    fontFamily: 'Proxima Nova Alt Semibold',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#FF640D',
  },
  popularTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: responsiveScreenWidth(0.5),
    marginTop: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(2),
  },
  listContainer: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(12),
    padding: 8,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    alignSelf: 'center',
    marginBottom: responsiveScreenHeight(2),
  },

  imageContainerList: {
    flex: 0.35,
    height: '100%',
  },
  textContainerList: {
    flex: 0.65,
    padding: responsiveScreenWidth(2),
    justifyContent: 'space-between',
  },
  itemHeadingText: {
    fontFamily: 'Proxima Nova Alt Semibold',
    fontSize: responsiveScreenFontSize(2.2),
  },
  headingText: {
    fontFamily: 'Proxima Nova Alt Bold',
    fontSize: responsiveScreenFontSize(2.5),
    color: '#FF640D',
  },
});
