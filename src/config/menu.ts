import type { Role } from "../features/auth/auth.types";

export type MenuItem = {
  label: string;
  path: string;
  roles: Role[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/",
    roles: ["admin", "user", "approver"],
  },
  {
    label: "Users",
    path: "/users",
    roles: ["admin"],
  },
];
