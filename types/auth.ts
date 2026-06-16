import { ReactNode } from "react";
import { Result } from "./result";
import { User } from "./user";

// Define o formato do contexto — o que ficará disponível para os componentes
// Equivalente à interface do serviço no Angular
export type AuthContextType = {
  user: User | null; // usuário logado ou null se não estiver logado
  isAuthenticated: boolean; // atalho para saber se tem usuário logado
  login: (email: string, password: string) => Promise<Result>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<Result>;
};

export type AuthProviderProps = {
  children: ReactNode;
};