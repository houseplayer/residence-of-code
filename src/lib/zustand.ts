import { create } from "zustand"

interface UserState {
  user: { email: string; roles: string[] } | null
  setUser: (email: string, roles: string[]) => void
  removeUser: () => void
}

interface TokenState {
  token: string | null
  setToken: (token: string) => void
  removeToken: () => void
}

export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (email, roles) => set(() => ({ user: { email, roles } })),
  removeUser: () => set(() => ({ user: null })),
}))

export const useToken = create<TokenState>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token })),
  removeToken: () => set(() => ({ token: null })),
}))
