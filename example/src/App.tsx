import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import RnSampleModule from '../../src';

export default function App() {
  const [deviceId, setDeviceId] = React.useState<string>();
  React.useEffect(() => {
    (async () => {
      const id = await RnSampleModule.getDeviceId();
      setDeviceId(id);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Device id: {deviceId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
