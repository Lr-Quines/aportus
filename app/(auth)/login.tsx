import Input from "@/components/Input";
import { Text, View } from "@/components/Themed";
import { ColorTheme } from "@/constants/Colors";
import { useAuth } from "@/contexts/authContext";
import { useColorTheme } from "@/hooks/useColorTheme";
import { loginStyles } from "@/styles/login.styles";
import { Result } from "@/types/result";
import { router } from 'expo-router';
import { useState } from "react";
import { Alert, Image, Pressable } from 'react-native';

export default function LoginScreen() {
  const { login } = useAuth();

  const colorTheme: ColorTheme = useColorTheme();
  const styles = loginStyles(colorTheme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha e-mail e senha');
      return;
    }

    setIsLoading(true);
    const result: Result = await login(email, password);
    setIsLoading(false);

    if (!result.success) {
      Alert.alert('Erro', result.error);
      return;
    }

    router.replace('/(tabs)/visao-geral');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/aportus-logo.png')}
            style={styles.logo} />
        </View>

        <Text style={styles.subtitle}>
          Controle seus investimentos em um só lugar
        </Text>

        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail} />

        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword} />

        <Pressable
          // quando isLoading = false → style={[styles.loginButton, false]} → só loginButton
          // quando isLoading = true  → style={[styles.loginButton, { opacity: 0.7 }]} → mescla os dois
          style={[styles.loginButton, isLoading && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={isLoading}>
          <Text style={styles.loginButtonText}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Text>
        </Pressable>

        <Text
          style={styles.link}
          onPress={() => router.push('/register')} >
          Criar conta
        </Text>
      </View>
    </View>
  );
}