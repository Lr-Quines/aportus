import { MOCK_USERS } from '@/mocks/users';
import { Result } from '@/types/result';
import { MockUser, User } from '@/types/user';

// Simula uma chamada de API com um pequeno delay
export async function login(email: string, password: string): Promise<Result<User>> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const found = MOCK_USERS.find(
    user => user.email === email && user.password === password
  );

  if (!found) {
    return { success: false, error: 'E-mail ou senha inválidos' };
  }

  // Remove a senha antes de salvar no estado
  const { password: _, ...userWithoutPassword } = found;

  return { success: true, data: userWithoutPassword };
}

export async function register(name: string, email: string, password: string): Promise<Result> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const user: MockUser | undefined = MOCK_USERS.find((user: MockUser) => user.email === email);

  if (user) {
    return { success: false, error: 'E-mail já cadastrado' };
  }

  // Simula o cadastro adicionando na lista mockada
  const newUser: MockUser = {
    id: String(MOCK_USERS.length + 1),
    name,
    email,
    password
  };

  MOCK_USERS.push(newUser);

  return { success: true };
}

export async function logout(): Promise<void> {
  // futuramente: chamar API para invalidar o token
  await new Promise(resolve => setTimeout(resolve, 100));
}