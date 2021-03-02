import { NativeModules } from 'react-native';

type RnSampleModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { RnSampleModule } = NativeModules;

export default RnSampleModule as RnSampleModuleType;
