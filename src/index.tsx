import BiometricsModule, {
  type authenticateProps,
} from './NativeBiometricsModule';

const {
  checkAvailableBiometrics,
  getAvailableBiometrics,
  authenticate,
  setSecretValue,
  authenticateWithKey,
} = BiometricsModule;

const authentication = (props?: authenticateProps) => {
  if (!props) return authenticate({});
  return authenticate(props);
};

export {
  authenticateWithKey,
  authentication,
  checkAvailableBiometrics,
  getAvailableBiometrics,
  setSecretValue,
};
