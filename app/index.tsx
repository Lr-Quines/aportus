import { useAuth } from '@/contexts/authContext';
import { Redirect } from 'expo-router';
import { JSX } from 'react';

export default function Index(): JSX.Element {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/visao-geral" />;
  }

  return <Redirect href="/(auth)/login" />;
}