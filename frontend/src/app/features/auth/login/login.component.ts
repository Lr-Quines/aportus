import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NAV_ROUTES } from '../../../core/consts/routes.const';
import { AuthLayoutComponent } from '../../../layout/auth-layout/auth-layout.component';
import { InputDirective } from '../../../shared/directives/input/input.directive';
import { AuthResult, LoginCredentials } from '../models/auth.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'aportus-login',
  imports: [
    AuthLayoutComponent,
    FormsModule,
    InputDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  // #region Injects
  private readonly toastrService = inject(ToastrService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  // #endregion Injects

  // #region Signals
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly isLoading = signal(false);
  // #endregion Signals

  // #region Methods
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

    this.router.navigate([NAV_ROUTES.dashboard]);
  }

  protected navigateToRegister(): void {
    this.router.navigate([NAV_ROUTES.register]);
  }
  // #endregion Methods

}
