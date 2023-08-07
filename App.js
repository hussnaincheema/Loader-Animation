import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FaceRecognitionAnimation from './App/Screens/FaceRecognitionAnimation';

export default function App() {
  return (
    <View style={styles.container}>
      <FaceRecognitionAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
