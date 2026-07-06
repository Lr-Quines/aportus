import { computed, Service, signal } from "@angular/core";
import { MOCK_USERS } from "../mocks/user.mock";
import { AuthResult, LoginCredentials, MockUser, RegisterCredentials } from "../models/auth.model";
import { User } from "../models/user.model";

@Service()
export class AuthService {
  private readonly currentUser = signal<User | null>(null);
  public readonly isAuthenticated = computed(() => this.currentUser() !== null);

  public async login(loginCredentials: LoginCredentials): Promise<AuthResult> {
    await this.simulateDelay();

    const found: MockUser | undefined = MOCK_USERS.find(
      (user: MockUser) => user.email === loginCredentials.email && user.password === loginCredentials.password
    );

    if (!found) {
      return { success: false, error: 'E-mail ou senha inválidos' };
    }

    const { password: _, ...userWithoutPassword } = found;

    this.currentUser.set(userWithoutPassword);

    return { success: true, data: userWithoutPassword };
  }

  public async register(registerCredentials: RegisterCredentials): Promise<AuthResult> {
    await this.simulateDelay();

    const alreadyExists = MOCK_USERS.find(
      (user: MockUser) => user.email === registerCredentials.email
    );

    if (alreadyExists) {
      return { success: false, error: 'E-mail já cadastrado' };
    }

    const newUser: MockUser = {
      id: String(MOCK_USERS.length + 1),
      name: registerCredentials.name,
      username: registerCredentials.username,
      email: registerCredentials.email,
      password: registerCredentials.password
    };

    MOCK_USERS.push(newUser);

    return { success: true };
  }

  private logout(): void {
    this.currentUser.set(null);
  }

  private simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}
