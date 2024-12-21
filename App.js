// Import necessary libraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for icons

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Dyslexia App</Text>
        <Text style={styles.settings}>Settings</Text>
      </View>

      <ScrollView>
        {/* Welcome Section */}
        <ImageBackground
          source={{
            uri: 'https://th.bing.com/th/id/OIP.4UE2iZoqXgp9WhILUj-g-wHaE9?rs=1&pid=ImgDetMain',
          }}
          style={styles.background}
        >
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome, Young Explorers!</Text>
            <Text style={styles.subText}>
              Let's embark on a fun learning adventure together.
            </Text>
            
          </View>
        </ImageBackground>

        {/* Main Features */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Main Features</Text>

          <TouchableOpacity style={[styles.featureButton, { backgroundColor: '#FFC1C1' }]}>
            <Icon name="volume-high" size={20} color="#333" style={styles.featureIcon} />
            <Text style={styles.featureText}>Text-to-Speech</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.featureButton, { backgroundColor: '#C1F0F6' }]}>
            <Icon name="mic" size={20} color="#333" style={styles.featureIcon} />
            <Text style={styles.featureText}>Phonological Exercises</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.featureButton, { backgroundColor: '#C1F6C7' }]}>
            <Icon name="cube" size={20} color="#333" style={styles.featureIcon} />
            <Text style={styles.featureText}>Memory Games</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.featureButton, { backgroundColor: '#FFD89C' }]}>
            <Icon name="stats-chart" size={20} color="#333" style={styles.featureIcon} />
            <Text style={styles.featureText}>Progress Tracker</Text>
          </TouchableOpacity>
        </View>

        {/* Tips for Parents */}
        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Tips for Parents</Text>
          <Text style={styles.tip}>📚 Encourage reading with colorful books.</Text>
          <Text style={styles.tip}>🔤 Use phonics games to improve skills.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  settings: {
    fontSize: 16,
    color: '#4A90E2',
  },
  background: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresSection: {
    marginBottom: 30,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  featureIcon: {
    marginRight: 10,
  },
  featureText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipsSection: {
    marginBottom: 30,
  },
  tip: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 10,
  },
});
