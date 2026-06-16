import { Ionicons } from "@expo/vector-icons";

// Esse tipo garante que só passamos nomes de ícones válidos do Ionicons
// É como um enum do TypeScript — evita erros de digitação no nome do ícone
export type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];