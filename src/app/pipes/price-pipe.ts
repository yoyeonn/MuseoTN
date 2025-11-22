import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) return 'Gratuit';
    if (value < 0) return 'Invalide';
    return value + ' DT';
  }

}
