import { defineStore } from 'pinia'
import { IUser } from '../types/resource'

const createInitialState = (): IUser => {
  return {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    token: '',
  };
}

export const useUserStore = defineStore('UserStore', {
  state: (): {user: IUser} => ({
    user: createInitialState()
  }),
  getters: {
    getUser(): IUser {
      return this.user
    },
    getFirstname(): string {
      return this.user.firstname
    },
    getLastname(): string {
      return this.user.lastname
    },
    getUsername(): string {
      return this.user.firstname + ' ' + this.user.lastname
    },
    getEmail(): string {
      return this.user.email
    },
    getToken(): string {
      return this.user.token
    },
    getInitials(): string {
      // separa por espacio, saca la primera letra, une todo, usa solo los primeros 2 y lleva todo a mayuscula
      const initials = (this.user.firstname.charAt(0) + this.user.lastname.charAt(0)).toUpperCase();
      return initials
    },
    isLoggedIn(): boolean {
      // existe token en la store?
      if (typeof this.user.token === 'string' && this.user.token !== '') return true
      return false
    },
    isLoggedInFromLocalStorage(): boolean {
      const localStorageData = localStorage.getItem('token');
      if (localStorageData !== null) {
        const localStorageUser = JSON.parse(localStorageData);
        return new Date(localStorageUser.ttl) > new Date(Date.now())
      }
      return false
    }
  },
  actions: {
    setUserFromResponse(response: any) {
      this.user = response.user
      this.user.token = response.token
      const localStorageData = {
        user: this.user,
        ttl: new Date(Date.now() + 86400*1000*7) // 1 week
      }
      localStorage.setItem("token", JSON.stringify(localStorageData));
    },
    setUserFromLocalStorage() {
      const localStorageData = localStorage.getItem('token');
      const localStorageUser = JSON.parse(localStorageData!);
      // esta logeado desde local storage
      this.user = localStorageUser.user;
    },
    setToken(token: string) {
      this.user.token = token
    },
    removeUser() {
      this.user = createInitialState();
      localStorage.removeItem('token');
    }
  },
})