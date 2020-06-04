import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RestaurantRow extends Component {
  render() {
    const { place, index } = this.props;

    return (
      <View
        key={place.name}
        style={[
          styles.row,
          {
            backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7',
          },
        ]}
      >
        <View style={styles.edges}>
          <Text>{index + 1}</Text>
        </View>

        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <View style={styles.edges}>
          <Text>Info</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  nameAddress: { flexDirection: 'column', flex: 8 },
  address: { color: 'grey' },
  input: {
    padding: 10, // vertical padding
    paddingHorizontal: 20, // left and right side
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});
