import { NativeModules } from 'react-native';

type RnSampleModuleType = {
  getDeviceId(): Promise<string>;
};

const { RnSampleModule } = NativeModules;

export default RnSampleModule as RnSampleModuleType;
