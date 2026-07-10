import { computed, inject, Service, signal } from "@angular/core";
import { Router } from "@angular/router";
import { NAV_ROUTES } from "../../../core/consts/routes.const";
import { STORAGE_KEYS } from "../../../core/consts/storage-keys.const";
import { MOCK_USERS } from "../mocks/user.mock";
import { AuthResult, LoginCredentials, MockUser, RegisterCredentials } from "../models/auth.model";
import { User } from "../models/user.model";

@Service()
export class AuthService {

  // #region Injects
  private readonly router = inject(Router);
  // #endregion Injects

  // #region Signals
  private readonly currentUser = signal<User | null>(this.getUserFromStorage());
  public readonly isAuthenticated = computed<boolean>(() => this.currentUser() !== null);
  // #endregion Signals

  // #region Methods
  public async login(loginCredentials: LoginCredentials): Promise<AuthResult> {
    await this.simulateDelay();

    const found: MockUser | undefined = MOCK_USERS.find(
      (user: MockUser) => user.email === loginCredentials.email && user.password === loginCredentials.password
    );

    if (!found) {
      return { success: false, error: 'E-mail ou senha inválidos' };
    }

    const { password: _, ...userWithoutPassword } = found;

    localStorage.setItem(STORAGE_KEYS.LOCAL_USER, JSON.stringify(userWithoutPassword));
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
      email: registerCredentials.email,
      password: registerCredentials.password
    };

    MOCK_USERS.push(newUser);

    return { success: true };
  }

  public logout(): void {
    localStorage.removeItem(STORAGE_KEYS.LOCAL_USER);
    this.currentUser.set(null);
    this.router.navigate([NAV_ROUTES.LOGIN]);
  }

  private getUserFromStorage(): User | null {
    const storedUser: string | null = localStorage.getItem(STORAGE_KEYS.LOCAL_USER);

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser) as User;
    }
    catch {
      return null;
    }
  }

  private simulateDelay(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  // #endregion Methods

}
