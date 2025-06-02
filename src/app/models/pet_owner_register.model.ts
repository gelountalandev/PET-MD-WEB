import { PetOwnerModel } from "./pet_owner.model";
import { UserModel } from "./user.model";

export interface PetOwnerRegisterModel {
  user: UserModel,
  petOwner: PetOwnerModel,
}