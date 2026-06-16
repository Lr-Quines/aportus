// Representa um usuário autenticado
export type User = {
  id: string;
  name: string;
  email: string;
}

export type MockUser = User & {
  password: string;
};