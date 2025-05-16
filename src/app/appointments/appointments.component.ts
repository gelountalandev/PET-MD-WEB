import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    MatCalendar,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  doctors = [
    'Jann Alexcis Mercado',
    'Marc Aguinaldo',
    'Dana White',
    'Patrick Bateman',
    'Felix Comia',
    'Mac Miller'
  ];

  times = [
    { label: '09 AM', selected: false },
    { label: '10 AM', selected: false },
    { label: '01 PM', selected: false },
    { label: '02 PM', selected: true },
  ];

  pet = [
    'Marc logan',
    'Cocomelon',
    'Volkanovski',
  ];

  selectedDate: Date | null = null;

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    console.log('Selected date:', date);
  }

  toggleTime(time: any): void {
    time.selected = !time.selected;
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
