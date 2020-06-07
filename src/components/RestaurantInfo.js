import Constants from 'expo-constants';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Stars from './Stars';

export default class RestaurantInfo extends Component {
  getImageUri(imageName) {
    return Constants.isDevice
      ? `http://rupesh-home-pc:3000/images/${imageName}`
      : `http://10.0.2.2:3000/images/${imageName}`;
  }

  render() {
    const place = this.props.route.params.place;

    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{
              uri: this.getImageUri(place.image),
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
            <Stars rating={place.rating} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  infoHeader: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  address: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
