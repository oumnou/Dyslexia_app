import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid } from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToText = () => {
  const [started, setStarted] = useState(false);
  const [recognized, setRecognized] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize voice recognition when the component is mounted
    const initializeVoice = async () => {
      try {
        if (Voice) {
          // Check if the Voice module is available before setting event handlers
          Voice.onSpeechStart = onSpeechStart;
          Voice.onSpeechRecognized = onSpeechRecognized;
          Voice.onSpeechResults = onSpeechResults;
          Voice.onSpeechError = onSpeechError;

          console.log('Voice module initialized successfully');
        } else {
          setError('Voice module not available');
        }
      } catch (e) {
        console.error("Error initializing voice module: ", e);
        setError("Error initializing voice module");
      }
    };

    // Initialize voice recognition
    initializeVoice();

    // Cleanup event listeners when the component unmounts
    return () => {
      if (Voice) {
        Voice.removeAllListeners();
        console.log('Voice listeners removed');
      }
    };
  }, []);

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Microphone Permission",
          message: "We need access to your microphone to record speech",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Microphone permission granted");
        return true;
      } else {
        console.log("Microphone permission denied");
        setError('Microphone permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
      setError('Failed to request permission');
      return false;
    }
  };

  const startRecognizing = async () => {
    const permissionGranted = await checkPermission();
    if (!permissionGranted) {
      return;
    }

    try {
      if (Voice) {
        setRecognized('');
        setStarted(true);
        //await Voice.start('en-US'); // Use start() method, not startSpeech()
      } else {
        setError("Voice module is not initialized properly.");
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  const stopRecognizing = async () => {
    try {
      if (Voice) {
        setStarted(false);
        await Voice.stop(); // Use stop() method, not stopSpeech()
      } else {
        setError("Voice module is not initialized properly.");
      }
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  const onSpeechStart = () => {
    console.log('Speech started');
  };

  const onSpeechRecognized = () => {
    console.log('Speech recognized');
  };

  const onSpeechResults = (e) => {
    if (e.value && e.value[0]) {
      setRecognized(e.value[0]); // The first result is the most accurate
    } else {
      setRecognized("No speech recognized.");
    }
  };

  const onSpeechError = (e) => {
    console.error("Speech error: ", e.error);
    setError(e.error.message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Speech to Text</Text>
      <Text style={styles.instructions}>Press the button and start speaking.</Text>
      <Text style={styles.result}>{recognized}</Text>
      {error ? <Text style={styles.error}>Error: {error}</Text> : null}

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
