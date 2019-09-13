import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyname'
})
export class SortbynamePipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a, b)=>{
      return a.name.localeCompare(b.name);
    });
  }

}
