import { UserModel } from "./user.model";
import { VetModel } from "./vet.model";

export interface VetRegisterModel {
  user: UserModel,
  vet: VetModel,
}