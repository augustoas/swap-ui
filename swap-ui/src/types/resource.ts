// src/types/index.ts
export enum Resource {
  Auth = 'auth',
  Users = 'users',
}

interface IDefaultAttributes {
  id: number,
  createdDate?: Date,
  updatedDate?: Date,
}

export interface IUser extends IDefaultAttributes {
  firstname: string,
  lastname: string,
  email: string,
  token: string,
}