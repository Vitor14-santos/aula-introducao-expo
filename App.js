import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi vitoria!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    //alignItens: 'center
    // '
    alignItems: 'center',
    justifyContent: 'center',
    pedding: 8,
    peddingTop: Constants.statusBarHeight || 8,
  },
});
