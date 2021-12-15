import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
export function HomeScreen() {
  return (
    <View style={styles.container}>
        <StatusBar showHideTransition='slide' barStyle='default' backgroundColor="#e91e63"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
});