import type { TurboModule } from 'react-native';
import { NativeModules, TurboModuleRegistry } from 'react-native';

export type AuthenticateProps = {
  title?: string;
  subTitle?: string;
};

export type TSecretValue = {
  value: string;
  key: string;
};

export type AuthenticateWithKeyProps = AuthenticateProps & {
  key: string;
};

export type ResponseCheck = { status: boolean; message: string };
export type ResponseAuth = {
  status: boolean;
  authenticationType: string;
  value?: string | null;
};

export interface Spec extends TurboModule {
  getAvailableBiometrics(): Promise<string>;
  checkAvailableBiometrics(): Promise<ResponseCheck>;
  authenticate(value?: AuthenticateProps): Promise<ResponseAuth>;
  authenticateWithKey(value: AuthenticateWithKeyProps): Promise<ResponseAuth>;
  setSecretValue(props: TSecretValue): Promise<ResponseAuth>;
}

// Kiểm tra nếu TurboModuleRegistry có tồn tại module này (New Architecture)
const BiometricsModule =
  global.__turboModuleProxy != null
    ? TurboModuleRegistry.get<Spec>('BiometricsModule')
    : NativeModules.BiometricsModule;

export default BiometricsModule as Spec;
