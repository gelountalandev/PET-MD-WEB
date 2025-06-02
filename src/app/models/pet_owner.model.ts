export interface PetOwnerModel {
  id: number,
  user_id: number,
  name: string,
  contact_number: number,
  address: string,
  created_at?: Date,
}