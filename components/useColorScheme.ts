import { ColorSchemeName, useColorScheme as useColorSchemeCore } from 'react-native';

export const useColorScheme = (): 'light' | 'dark' => {
  const coreScheme: ColorSchemeName = useColorSchemeCore();

  return coreScheme === 'unspecified'
    ? 'light'
    : coreScheme;
};
