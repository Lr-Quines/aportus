import * as authService from '@/services/authService';
import { AuthContextType, AuthProviderProps } from '@/types/auth';
import { Result } from '@/types/result';
import { User } from '@/types/user';
import { Context, createContext, JSX, useContext, useState } from 'react';

// Cria o contexto com valor inicial undefined
// O undefined força o uso dentro do Provider — se tentar usar fora, lança erro
const authContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>(undefined);

// O Provider é a casca que envolve o app e disponibiliza os dados
// Equivalente ao @Injectable({ providedIn: 'root' }) do Angular
export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated: boolean = user !== null;

  // Simula uma chamada de API com um pequeno delay
  async function login(email: string, password: string): Promise<Result> {
    const result: Result<User> = await authService.login(email, password);

    if (result.success && result.data) {
      setUser(result.data);
    }

    const { data: _, ...resultWithoutData } = result

    return resultWithoutData;
  }

  async function register(name: string, email: string, password: string): Promise<Result> {
    return authService.register(name, email, password);
  }

  async function logout(): Promise<void> {
    await authService.logout();
    setUser(null);
  }

  return (
    <authContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </authContext.Provider>
  );
}

// Hook customizado para consumir o contexto
// Equivalente ao inject(AuthService) do Angular
// O erro garante que nunca será usado fora do AuthProvider
export function useAuth(): AuthContextType {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro do AuthProvider');
  }

  return context;
}