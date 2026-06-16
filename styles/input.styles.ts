import { ColorTheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const inputStyles = (colorTheme: ColorTheme) => StyleSheet.create({
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: colorTheme.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colorTheme.card,
    color: colorTheme.text,
  }
});