import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetService } from '../services/pet/pet.service';
import { Router } from '@angular/router';
import { PetModel } from '../models/pet.model';

@Component({
  selector: 'app-pet-profile-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pet-profile-form.component.html',
  styleUrl: './pet-profile-form.component.scss'
})
export class PetProfileFormComponent implements OnInit {

  petModel: PetModel = {} as PetModel;
  submitted = false;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void { }
  savePet(): void {
    const petModel = {
      user_id: 15,
      name: this.petModel.name,
      breed: this.petModel.breed,
      species: this.petModel.species,
      birth_date: this.petModel.birth_date,
      gender: this.petModel.gender,
      weight: this.petModel.weight,
      created_at: new Date()
    };

    this.petService.createPet(petModel).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
        // this.router.navigate(['/register']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}

