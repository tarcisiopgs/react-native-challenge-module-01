import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
  }
});

export default Header;
