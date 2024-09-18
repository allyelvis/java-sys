import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MusicGenerator from './components/MusicGenerator';

const App = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateMusic = () => {
    setIsGenerating(true);
    // Simulate generating music
    setTimeout(() => {
      setIsGenerating(false);
      alert("Music generated successfully!");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aenzbi Music Generator App</Text>
      <MusicGenerator isGenerating={isGenerating} />
      <Button title="Generate Music" onPress={handleGenerateMusic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});

export default App;
