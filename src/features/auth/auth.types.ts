export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLES = {
  USER: "user",
  ADMIN: "admin",
  APPROVER: "approver",
} as const;

export interface User {
  id: string;
  email: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  isInitialized: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
