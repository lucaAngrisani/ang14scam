import { Injectable } from '@angular/core';

@Injectable()
export class LandingService {

  constructor() { }

  print(): string {
    return 'LANDING SERVICE';
  }

}
