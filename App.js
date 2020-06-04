import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          textAlign: 'center',
          color: '#0066CC',
          fontWeight: '300',
        }}
      >
        Restaurant Review
      </Text>

      <Text>React Cafe</Text>
      <Text style={{ color: 'grey' }}>123 Anywhere St</Text>
      <Text> Fancy Restaurant</Text>
      <Text style={{ color: 'grey' }}>799 Main St</Text>
    </View>
  );
}
