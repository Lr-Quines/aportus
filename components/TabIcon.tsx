import { IoniconsName } from "@/types/icons";
import { Ionicons } from "@expo/vector-icons";
import { ColorValue } from "react-native";
import { JSX } from "react/jsx-runtime";

// Componente auxiliar para renderizar os ícones das abas
// Recebe o nome do ícone e a cor (ativa ou inativa) como props
// É como um componente filho no Angular que recebe @Input()
export function TabIcon({ name, color }: { name: IoniconsName; color: ColorValue }): JSX.Element {
  return <Ionicons name={name} size={24} color={color} />;
}