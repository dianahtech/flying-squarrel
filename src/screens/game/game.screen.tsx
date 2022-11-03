import {useNavigation} from '@react-navigation/native';
import React, { useCallback } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import AppLoading from 'expo-app-loading';


export const GameScreen = () => {
  const navigation = useNavigation();

 
  

  return (
    <>
      <View style={styles.container} >
        <Text style={styles.text}>Game screen!</Text>
        <Text>Bem vindo usuario! </Text>
        <Button   title='jogar'
          onPress={() => navigation.navigate('Appy')}
        />
      </View>
    </>
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
    fontFamily: "Karmafu"
  },
});
