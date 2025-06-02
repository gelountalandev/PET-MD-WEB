import { USER_TYPE } from "../app.constants";

export interface UserModel {
  id: number,
  email: string,
  username: string,
  password: string,
  user_type: USER_TYPE,
}