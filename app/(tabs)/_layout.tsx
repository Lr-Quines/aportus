// Importa a biblioteca de ícones — usaremos ícones do Ionicons nas abas
// Tabs é o componente que cria a navegação por abas na parte inferior da tela
import { ImperativeRouter, Tabs } from 'expo-router';
// colorPalette é a paleta de cores que configuramos no constants/Colors.ts
import colorPalette, { ColorTheme } from '@/constants/Colors';
// Hook que detecta se o usuário está usando tema claro ou escuro
import { useColorScheme } from '@/components/useColorScheme';
// Evita erros de renderização quando o app roda no navegador web
import { TabIcon } from '@/components/TabIcon';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

// Componente principal que define o layout das abas
export default function TabLayout() {
  // Pega o tema atual: 'light' ou 'dark'
  // O '?? light' garante um valor padrão caso seja undefined
  const colorScheme: 'light' | 'dark' = useColorScheme();

  // Atalho para não precisar escrever Colors[colorScheme] toda hora
  const colorTheme: ColorTheme = colorPalette[colorScheme];

  const router: ImperativeRouter = useRouter();

  return (
    <Tabs
      screenOptions={{
        // Cor do ícone e texto da aba quando está selecionada
        tabBarActiveTintColor: colorTheme.tint,

        // Cor do ícone e texto da aba quando não está selecionada
        tabBarInactiveTintColor: colorTheme.tabIconDefault,

        // Estilo da barra de abas no rodapé
        tabBarStyle: {
          backgroundColor: colorTheme.card,
          borderTopColor: colorTheme.border,
        },

        // Estilo do cabeçalho no topo de cada tela
        headerStyle: {
          backgroundColor: colorTheme.card,
        },

        // Cor do texto do cabeçalho
        headerTintColor: colorTheme.text,

        // No web o cabeçalho é ocultado durante a renderização inicial
        // para evitar um erro visual — o useClientOnlyValue cuida disso
        headerShown: useClientOnlyValue(false, true),

        headerRight: () => (
          <Pressable onPress={() => router.push('/perfil')} style={{ marginRight: 16 }}>
            <TabIcon name='person-circle-outline' color={colorTheme.text} />
          </Pressable>
        ),

        headerLeft: () => (
          <Pressable onPress={() => router.push('/carteiras')} style={{ marginLeft: 16 }}>
            <TabIcon name='chevron-down-outline' color={colorTheme.text} />
          </Pressable>
        ),
      }}>

      {/* Cada Tabs.Screen define uma aba */}
      {/* O 'name' deve ser igual ao nome do arquivo dentro de app/(tabs)/ */}

      {/* Aba 1 — aponta para app/(tabs)/index.tsx */}
      <Tabs.Screen
        name='index'
        options={{
          title: 'Visão geral',
          tabBarIcon: ({ color }) => (
            <TabIcon name='pie-chart-outline' color={color} />
          ),
        }} />

      {/* Aba 2 — aponta para app/(tabs)/two.tsx */}
      <Tabs.Screen
        name='lancamentos'
        options={{
          title: 'Lançamentos',
          tabBarIcon: ({ color }) => (
            <TabIcon name='add-circle-outline' color={color} />
          ),
        }} />
    </Tabs>
  );
}
