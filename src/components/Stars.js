import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Stars({ rating = 3.5 }) {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View style={styles.stars}>
      {stars.map((_, i) => {
        const name = Math.floor(rating) > i ? 'star' : 'star-half';
        return <FontAwesome key={i} name={name} size={15} color='#FFD64C' />;
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
});
