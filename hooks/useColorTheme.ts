import { useColorScheme } from '@/components/useColorScheme';
import colorPalette, { ColorTheme } from '@/constants/Colors';

export function useColorTheme(): ColorTheme {
  const colorScheme: 'light' | 'dark' = useColorScheme();
  return colorPalette[colorScheme];
}