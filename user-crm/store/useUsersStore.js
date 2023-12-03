import users from "@/data/users.json";
import { create } from "zustand";

const useUsersStore = create((set) => ({
  users: users,
  setUsers: (users) => set({ users }),
  deleteUser: (id) =>
    set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  deleteMultiple: (ids) =>
    set((state) => ({
      users: state.users.filter((user) => !ids.includes(user.id)),
    })),
}));

export default useUsersStore;
