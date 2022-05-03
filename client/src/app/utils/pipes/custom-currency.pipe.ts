import { Pipe, PipeTransform } from '@angular/core';
import { toPrince } from '../Formatter';

@Pipe({name: 'CustomCurrency'})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return toPrince(value);
  }
}
