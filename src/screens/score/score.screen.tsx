
import {Text, View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const ScoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página para Score</Text>
        <Text>Bem vindo usuario! </Text>
        <StatusBar style="auto" />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
