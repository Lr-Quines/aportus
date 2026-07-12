import { Result } from '../../../shared/interfaces/result.interface';
import { User } from './user.interface';

export interface AuthResult extends Result<User> { }

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface MockUser extends User {
  password: string;
}
