import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(baseArray: any[], key: string = ''): any {
    if (key === '') {
      return baseArray;
    }

    baseArray.sort( (a, b) => {
      return (a[key].toString() as string).localeCompare( b[key].toString() );
    });

    return baseArray;
  }

}
