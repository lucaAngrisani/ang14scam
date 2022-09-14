import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getRename'
})
export class GetRenamePipe implements PipeTransform {

  transform(user: { firstName: string, lastName: string }): any {
    return user?.lastName + ' ' + user?.lastName;
  }

}
