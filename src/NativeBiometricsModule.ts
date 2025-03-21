import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type authenticateProps = {
  title?: string;
  subTitle?: string;
};

export type TSecretValue = {
  value: string;
  key: string;
};

export type authenticateWithKeyProps = authenticateProps & {
  key: string;
};

export type ResponseCheck = { status: boolean; message: string };
export type ResponseAuth = {
  status: boolean;
  authenticationType: string;
  value?: string;
};

export interface Spec extends TurboModule {
  getAvailableBiometrics(): Promise<string>;
  checkAvailableBiometrics(): Promise<ResponseCheck>;
  authenticate(value?: authenticateProps): Promise<ResponseAuth>;
  authenticateWithKey(value: authenticateWithKeyProps): Promise<ResponseAuth>;
  setSecretValue(props: TSecretValue): Promise<ResponseAuth>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('BiometricsModule');
