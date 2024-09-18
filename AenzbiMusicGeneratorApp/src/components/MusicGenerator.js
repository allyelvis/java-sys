import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const MusicGenerator = ({ isGenerating }) => {
  return (
    <View style={styles.container}>
      {isGenerating ? (
        <View>
          <Text style={styles.text}>Generating music...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <Text style={styles.text}>Press the button to generate music!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default MusicGenerator;
