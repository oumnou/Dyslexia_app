import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice'; // Importing the voice library

const SpeechToText = () => {
  const [started, setStarted] = useState(false);
  const [recognized, setRecognized] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize voice recognition when component mounts
    console.log(Voice)
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      // Cleanup event listeners when component unmounts
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // Start voice recognition
  const startRecognizing = async () => {
    try {
      setRecognized('');
      setStarted(true);
      await Voice.start('en-US'); // You can change this to your preferred language code
    } catch (e) {
      setError(e.message);
    }
  };

  // Stop voice recognition
  const stopRecognizing = async () => {
    try {
      setStarted(false);
      await Voice.stop();
    } catch (e) {
      setError(e.message);
    }
  };

  // Speech started callback
  const onSpeechStart = () => {
    console.log('Speech started');
  };

  // Speech recognized callback
  const onSpeechRecognized = () => {
    console.log('Speech recognized');
  };

  // Speech results callback
  const onSpeechResults = (e) => {
    setRecognized(e.value[0]); // The first result is the most accurate
  };

  // Speech error callback
  const onSpeechError = (e) => {
    setError(e.error.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Speech to Text</Text>
      <Text style={styles.instructions}>Press the button and start speaking.</Text>

      {/* Display the results */}
      <Text style={styles.result}>{recognized}</Text>

      {/* Error message */}
      {error ? <Text style={styles.error}>Error: {error}</Text> : null}

      {/* Start/Stop Button */}
      {!started ? (
        <Button title="Start Recognizing" onPress={startRecognizing} />
      ) : (
        <Button title="Stop Recognizing" onPress={stopRecognizing} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default SpeechToText;
