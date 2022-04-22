import * as React from 'react';
import { StyleSheet} from 'react-native';
import LoginApp from './LoginApp';

export default function App() {
  return (
    <LoginApp></LoginApp>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    height: 100,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
