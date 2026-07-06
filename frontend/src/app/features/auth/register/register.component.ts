import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InputDirective } from '../../../shared/directives/input/input.directive';
import { RegisterCredentials } from '../models/auth.model';
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
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  protected readonly name = signal('');
  protected readonly username = signal('');
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly confirmPassword = signal('');
  protected readonly isLoading = signal(false);

  protected async handleRegister(): Promise<void> {
    if (!this.name() || !this.email() || !this.password() || !this.confirmPassword()) {
      this.toastr.warning('Preencha todos os campos');
      return;
    }

    if (this.password() !== this.confirmPassword()) {
      this.toastr.error('As senhas não conferem');
      return;
    }

    if (this.password().length < 6) {
      this.toastr.error('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    this.isLoading.set(true);

    const credentials: RegisterCredentials = {
      name: this.name(),
      username: this.username(),
      email: this.email(),
      password: this.password(),
    };

    const result = await this.authService.register(credentials);

    this.isLoading.set(false);

    if (!result.success) {
      this.toastr.error(result.error ?? 'Erro ao realizar cadastro');
      return;
    }

    this.toastr.success('Conta criada com sucesso!');
    this.router.navigate(['/auth/login']);
  }

  protected navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
