import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { InputDirective } from '../../../shared/directives/input/input.directive';
import { AuthResult, LoginCredentials } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aportus-login',
  imports: [
    FormsModule,
    InputDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly themeService = inject(ThemeService);
  private readonly toastrService = inject(ToastrService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly isLoading = signal(false);

  protected async handleLogin(): Promise<void> {
    if (!this.email() || !this.password()) {
      this.toastrService.warning('Preencha e-mail e senha');
      return;
    }

    this.isLoading.set(true);

    const credentials: LoginCredentials = {
      email: this.email(),
      password: this.password(),
    };

    const result: AuthResult = await this.authService.login(credentials);

    this.isLoading.set(false);

    if (!result.success) {
      this.toastrService.warning(result.error);
      return;
    }

    this.router.navigate(['/aportus']);
  }

  protected navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }
}
