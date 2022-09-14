import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }

  print(): string {
    return 'APP SERVICE';
  }

}
