import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : null;
  }
}
