import { ColorTheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const loginStyles = (colorTheme: ColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: colorTheme.background,
  },

  logo: {
    width: 110,
    height: 110,
    alignSelf: 'center',
  },

  appName: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colorTheme.text,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colorTheme.textSecondary,
    marginTop: 8,
    marginBottom: 32,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: colorTheme.card,
    borderRadius: 20,
    padding: 20,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
    elevation: 4,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: colorTheme.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colorTheme.card,
    color: colorTheme.text,
  },

  loginButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: colorTheme.tint,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: colorTheme.white,
    fontSize: 16,
    fontWeight: '700',
  },

  link: {
    textAlign: 'center',
    marginTop: 24,
    color: colorTheme.tint,
    fontWeight: '600',
  },

  logoContainer: {
    backgroundColor: colorTheme.backgroundImage,
    borderRadius: 16,
    padding: 16,
    alignSelf: 'center',
    marginBottom: 16,
  },
});