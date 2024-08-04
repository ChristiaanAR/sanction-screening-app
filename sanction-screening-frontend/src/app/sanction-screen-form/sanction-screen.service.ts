import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SanctionScreenService {

  constructor() {}

  async sendSanctionScreenInfo(name: string, dateOfBirth: string, country: string) {
    const res = await axios.post(
      'http://localhost:8080/screen',
      {
        name,
        dateOfBirth,
        country
      }
    );

    return res.data;
  }
}
