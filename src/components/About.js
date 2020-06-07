import { FontAwesome5 } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={styles.header}>About Restaurant Review</Text>
        <FontAwesome5
          name='utensils'
          size={100}
          color='black'
          style={styles.icon}
        />
        <Text style={styles.text}>This is our company!</Text>
        <Text style={styles.text}>We are growing and we are helpful!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center',
    color: 'orange',
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginTop: 20,
  },
});
