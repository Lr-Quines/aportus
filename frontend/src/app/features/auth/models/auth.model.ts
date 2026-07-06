import { Result } from '../../../shared/models/result.model';
import { User } from './user.model';

export interface AuthResult extends Result<User> { }

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface MockUser extends User {
  password: string;
}
