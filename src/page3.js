import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

const Page3 = () => {
  return (
    <View style={styles.container}>
      <Text>Ciao</Text>
    </View>
  );
};

export default Page3;
