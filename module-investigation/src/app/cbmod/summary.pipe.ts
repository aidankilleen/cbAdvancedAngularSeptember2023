import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length: number, ...args: unknown[]): unknown {
    return value.slice(0, length) + "...";
  }

}
