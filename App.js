import axios from 'axios';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import Constants from 'expo-constants';
import PizzaImage from 'images/pizza.png';
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, TextInput, View } from 'react-native';

console.disableYellowBox = true;

export default class App extends Component {
  state = {
    search: null,
    restaurants: [],
  };
  isSimulator() {
    console.log(
      `running in  ${
        Constants.deviceName
      } and it is an emulator=${!Constants.isDevice}`
    );
    return !Constants.isDevice;
  }
  componentDidMount() {
    axios
      .get(
        this.isSimulator()
          ? 'http://10.0.2.2:3000/restaurants'
          : 'http://rupesh-home-pc:3000/restaurants'
      )
      .then((result) => this.setState({ restaurants: result.data }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <Image source={PizzaImage} />
        </View>
        <Header />
        <TextInput
          value={this.state.search}
          style={styles.input}
          placeholder='Live Search'
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
        />
        <FlatList
          data={this.state.restaurants.filter((place) => {
            return (
              !this.state.search ||
              place.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantRow place={item} index={index} />
          )}
          keyExtractor={(item) => item.name}
          initialNumToRender={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
