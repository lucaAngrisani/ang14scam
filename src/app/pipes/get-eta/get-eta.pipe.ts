import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getEta'
})
export class GetEtaPipe implements PipeTransform {

  transform(date: Date): any {
    let now = new Date();
    return now.getFullYear() - date.getFullYear();
  }

}
