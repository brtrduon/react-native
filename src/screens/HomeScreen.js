import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

// const HomeScreen = (props) => {
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Crack</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      ></Button>
      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      ></Button>
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      ></Button>
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      ></Button>
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
