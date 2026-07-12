import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NAV_ROUTES } from '../../../core/consts/routes.const';
import { InputDirective } from '../../../shared/directives/input/input.directive';
import { AuthResult, RegisterCredentials } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aportus-register',
  imports: [
    FormsModule,
    InputDirective
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  // #region Injects
  private readonly toastrService = inject(ToastrService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  // #endregion Injects

  // #region Signals
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly isLoading = signal(false);
  // #endregion Signals

  // #region Methods
  protected async handleRegister(): Promise<void> {
    if (!this.name() || !this.email() || !this.password() || !this.confirmPassword()) {
      this.toastrService.warning('Preencha todos os campos');
      return;
    }

    if (this.password() !== this.confirmPassword()) {
      this.toastrService.error('As senhas não conferem');
      return;
    }

    this.isLoading.set(true);

    const credentials: RegisterCredentials = {
      name: this.name(),
      email: this.email(),
      password: this.password()
    };

    const result: AuthResult = await this.authService.register(credentials);

    this.isLoading.set(false);

    if (!result.success) {
      this.toastrService.error(result.error ?? 'Erro ao realizar cadastro');
      return;
    }

    this.toastrService.success('Conta criada com sucesso!');

    const authResult: AuthResult = await this.authService.login(credentials);

    authResult.success
      ? this.router.navigate([NAV_ROUTES.HOME_PAGE])
      : this.router.navigate([NAV_ROUTES.LOGIN]);
  }

  protected navigateToLogin(): void {
    this.router.navigate([NAV_ROUTES.LOGIN]);
  }
  // #endregion Methods

}
