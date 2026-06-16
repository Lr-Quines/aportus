const primary = '#00C896';
const primaryDark = '#00A87E';

// Define o formato que todo tema deve seguir
// Se adicionar uma cor nova no light, o TypeScript vai exigir no dark também
export type ColorTheme = {
  text: string;
  textSecondary: string;
  background: string;
  backgroundImage: string;
  card: string;
  border: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  positive: string;
  negative: string;
  warning: string;
  white: string;
}

// Diz ao TypeScript que o objeto exportado tem exatamente light e dark,
// e que ambos seguem o formato ColorTheme
const colorPalette: { light: ColorTheme; dark: ColorTheme } = {
  light: {
    text: '#1A1A2E',
    textSecondary: '#6B7280',
    background: '#F4F6F9',
    backgroundImage: '#0F172A',
    card: '#FFFFFF',
    border: '#E5E7EB',
    tint: primary,
    tabIconDefault: '#9CA3AF',
    tabIconSelected: primary,
    positive: '#00C896', // rentabilidade positiva
    negative: '#EF4444', // rentabilidade negativa
    warning: '#F59E0B',
    white: '#FFFFFF'
  },
  dark: {
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    background: '#0F172A',
    backgroundImage: '#F4F6F9',
    card: '#1E293B',
    border: '#334155',
    tint: primaryDark,
    tabIconDefault: '#475569',
    tabIconSelected: primaryDark,
    positive: '#00C896',
    negative: '#EF4444',
    warning: '#F59E0B',
    white: '#FFFFFF'
  },
};

export default colorPalette;