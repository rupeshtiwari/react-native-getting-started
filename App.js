import React from 'react';
import { Text, View } from 'react-native';

const restaurants = [
  { name: 'React Cafe', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant', address: '799 Main St' },
  { name: 'Taco Place', address: '550 Maple Rd' },
  { name: "Tony's Diner", address: '4101 College St' },
  { name: 'Pasta Central', address: '706 Harper St' },
  { name: 'Burger Builder', address: '4869 Hamilton Dr' },
  { name: 'Pizza Express', address: '1049 Bird St' },
  { name: 'Teriyaki To Go', address: '1885 Tea Berry Lane' },
  { name: 'Maroon Deli', address: '1082 Stuart St' },
  { name: 'Prime Bar and Grill', address: '1848 Fairfax Dr' },
  { name: 'Dumpling House', address: '747 Kelly Dr' },
  { name: 'Hot Chicken', address: '1816 Olive St' },
  { name: "Luna's Tap Room", address: '3256 Spirit Dr' },
  { name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr' },
  { name: "Bobby's Burgers", address: '4152 Berkley St' },
  { name: 'Turnpike Diner', address: '4571 Central Ave' },
  { name: 'Bombay Express', address: '65 Queens Lane' },
  { name: 'Coffee Central', address: '3228 Oakwood Circle' },
  { name: "King's Garden", address: '2935 Victoria Ct' },
  { name: 'Salads and More', address: '2454 Preston St' },
];

export default function App() {
  return (
    <View style={{ backgroundColor: 'orange', flex: 1 }}>
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
      {restaurants.map((place, index) => {
        return (
          <View key={place.name} style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>{index + 1}</Text>
            </View>

            <View style={{ flexDirection: 'column', flex: 8 }}>
              <Text>{place.name}</Text>
              <Text style={{ color: 'grey' }}>{place.address}</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>Info</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
