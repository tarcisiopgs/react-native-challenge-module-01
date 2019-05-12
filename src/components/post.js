import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';

const Post = ({id, title, author, content, final}) => (
  <View style={final ? [styles.container, styles.finalContainer] : styles.container} key={id}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text>{author}</Text>
    </View>
    <View>
      <Text style={styles.content}>{content}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 4,
    marginBottom: 20,
  },
  finalContainer: {
    marginBottom: 40,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#bcbcbc',
    paddingBottom: 10,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#000"
  },
  content: {
    color: '#000'
  }
});

export default Post;
