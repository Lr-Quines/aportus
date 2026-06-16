export type Result<T = void> = {
  success: boolean;
  error?: string;
  data?: T;
};