export type RegisterFormType = {
  nickname: string;
  email: `${string}@${string}`;
  password: string;
};
export enum API {
  API_ROOT = "https://movinout-5eqc.onrender.com/api/v1/",
}
export type ApiResponse = {
  status: number;
  items: { msg: string; user?: Register; todo?: TODO };
};
type Register = {
  id?: string;
  email: string;
  password: string;
  nickname: string;
  isAdmin: boolean;
};
interface TODO {
  id: string;
  name: string;
  state: boolean;
  user: Register;
}
