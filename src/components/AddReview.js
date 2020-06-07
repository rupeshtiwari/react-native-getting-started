import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class AddReview extends Component {
  state = {
    name: null,
    rating: null,
    review: null,
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <FontAwesome name='close' size={24} color='#0066CC' />
        </TouchableOpacity>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({ name })}
        />
        <Text style={styles.rating}>Your Rating:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <TouchableOpacity
                onPress={() => this.setState({ rating: i })}
                style={styles.starButton}
                key={i}
              >
                <FontAwesome5
                  name='star'
                  size={40}
                  color={this.state.rating >= i ? '#FFD64C' : '#CCCCCC'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder='Review'
          value={this.state.review}
          onChangeText={(review) => this.setState({ review })}
          multiline={true}
          numberOfLines={5}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Submit Review</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});
