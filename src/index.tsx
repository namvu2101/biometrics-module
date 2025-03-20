import BiometricsModule from './NativeBiometricsModule';

export function multiply(a: number, b: number): number {
  return BiometricsModule.multiply(a, b);
}
