import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import * as RootNavigation from './RootNavigation.js';

const styles = StyleSheet.create({
  container: {
    marginBottom: '1%',
    padding: '1%',
    height: '40%',
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {height: 40, borderColor: 'gray', borderWidth: 1},
});

const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text>Bonsoir</Text>
      <Button
        title="Next"
        onPress={() => {
          RootNavigation.navigate('Page3');
        }}
      />
    </View>
  );
};

export default Page2;
