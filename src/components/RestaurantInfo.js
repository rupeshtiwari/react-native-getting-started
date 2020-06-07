import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import getUrl from './BaseUrl';
import Stars from './Stars';

export default class RestaurantInfo extends Component {
  getImageUri(imageName) {
    return getUrl(`images/${imageName}`);
  }

  addReview = () => {
    this.props.navigation.navigate('AddReview');
  };

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
            <TouchableOpacity style={styles.button} onPress={this.addReview}>
              <Text style={styles.buttonText}>Add Review</Text>
            </TouchableOpacity>
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
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 12,
    textAlign: 'center',
  },
});
