import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarsList from './Components/CarsList';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList />
      <StatusBar style='auto'/>
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
