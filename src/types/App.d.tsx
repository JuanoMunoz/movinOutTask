export type RegisterFormType = {
  nickname: string;
  email: `${string}@${string}`;
  password: string;
};
export enum API {
  API_ROOT = "https://movin-out-api.vercel.app/api/v1/",
}
export type ApiResponse = {
  status: number;
  items: { msg: string; user?: Register; todo?: TODO, token?: string };
};
type Register = {
  id?: string;
  email: string;
  password: string;
  nickname: string;
  isAdmin: boolean;
};
export type LoginFormType = {
  email: string;
  password: string;
};
interface TODO {
  id: string;
  name: string;
  state: boolean;
  user: Register;
}
