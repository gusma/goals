import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableHighlight activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#e2e2e2',
  },
});

export default GoalItem;
