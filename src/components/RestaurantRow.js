import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class RestaurantRow extends Component {
  state = {
    showInfo: false,
  };

  infoPressed = () => this.setState({ showInfo: !this.state.showInfo });

  render() {
    const { place, index } = this.props;
    return (
      <View
        key={place.name}
        style={{
          backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7',
        }}
      >
        <View style={styles.row}>
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>

          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableWithoutFeedback
              onPress={this.infoPressed}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Info</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {this.state.showInfo && (
          <View>
            <Text>Restaurant Info</Text>
          </View>
        )}
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
    minWidth: 50,
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
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
  },
});
