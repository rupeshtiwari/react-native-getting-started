import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import getUrl from './BaseUrl';

export default class AddReview extends Component {
  state = {
    name: null,
    rating: null,
    comment: null,
    submitting: false,
  };

  get submitUrl() {
    return getUrl('review');
  }

  componentDidMount() {
    AsyncStorage.getItem('reviewer_name').then((name) =>
      this.setState({ name })
    );
  }

  submitReview = () => {
    console.log('submitting form');
    this.setState({ submitting: true });
    if (this.state.name != null) {
      AsyncStorage.setItem('reviewer_name', this.state.name);
    }

    axios
      .post(this.submitUrl, {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          rating: this.state.rating,
          comment: this.state.comment,
        }),
      })
      .then((result) => {
        this.setState({ submitting: false }, () => {
          console.log(result.data);
          this.props.navigation.goBack();
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ submitting: false });
      });
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={styles.root}>
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <FontAwesome name='close' size={24} color='#0066CC' />
          </TouchableOpacity>
          <Text style={styles.addReview}>Add Review</Text>
          <TextInput
            placeholder='Your Name (optional)'
            style={styles.input}
            value={this.state.name || ''}
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
                  <FontAwesome
                    name={'star'}
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
            onChangeText={(comment) => this.setState({ comment })}
            multiline={true}
            numberOfLines={5}
          />

          {this.state.submitting && (
            <ActivityIndicator
              size='large'
              color='#0066CC'
              style={{ padding: 5 }}
            />
          )}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitReview}
            disabled={this.state.submitting}
          >
            <Text style={styles.submitButtonText}> Submit Review</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
    marginVertical: 10,
  },
  stars: {
    marginBottom: 10,
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
