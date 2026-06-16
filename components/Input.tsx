import { ColorTheme } from '@/constants/Colors';
import { useColorTheme } from '@/hooks/useColorTheme';
import { inputStyles } from '@/styles/input.styles';
import { InputOptions } from '@/types/input';
import { TextInput } from 'react-native';

export default function Input({ placeholder, value, onChangeText, secureTextEntry = false, autoCapitalize = 'none', style }: InputOptions) {
  const colorTheme: ColorTheme = useColorTheme();
  const styles = inputStyles(colorTheme);

  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={colorTheme.textSecondary}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
  );
}

