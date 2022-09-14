import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class NotFoundService {

  constructor() { }

  print(): string {
    return 'NOT FOUND SERVICE';
  }

}
