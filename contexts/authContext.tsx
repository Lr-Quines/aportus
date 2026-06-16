import { MOCK_USERS } from '@/mocks/users';
import { AuthContextType } from '@/types/auth';
import { Result } from '@/types/result';
import { User } from '@/types/user';
import { Context, createContext, JSX, ReactNode, useContext, useState } from 'react';

// Cria o contexto com valor inicial undefined
// O undefined força o uso dentro do Provider — se tentar usar fora, lança erro
const authContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>(undefined);

// O Provider é a casca que envolve o app e disponibiliza os dados
// Equivalente ao @Injectable({ providedIn: 'root' }) do Angular
export function AuthProvider(children: ReactNode): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated: boolean = user !== null;

  // Simula uma chamada de API com um pequeno delay
  async function login(email: string, password: string): Promise<Result> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const found = MOCK_USERS.find(
      user => user.email === email && user.password === password
    );

    if (!found) {
      return { success: false, error: 'E-mail ou senha inválidos' };
    }

    // Remove a senha antes de salvar no estado
    const { password: _, ...userWithoutPassword } = found;
    setUser(userWithoutPassword);

    return { success: true };
  }

  async function register(name: string, email: string, password: string): Promise<Result> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const alreadyExists = MOCK_USERS.find(u => u.email === email);

    if (alreadyExists) {
      return { success: false, error: 'E-mail já cadastrado' };
    }

    // Simula o cadastro adicionando na lista mockada
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      name,
      email,
      password,
    };

    MOCK_USERS.push(newUser);

    return { success: true };
  }

  function logout(): void {
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