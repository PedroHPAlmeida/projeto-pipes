import { Pipe, PipeTransform } from '@angular/core';
import { CustomerStatus } from '../types/operation.type';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {
  transform(value: number): string {
    const statusDescription: { [key: number]: string } = {
      [CustomerStatus.ACTIVE]: 'assets/icons/active-icon.png',
      [CustomerStatus.INACTIVE]: 'assets/icons/inactive-icon.png',
    }

    if (!(value in statusDescription)) {
      return 'Status Inválido';
    }
    return statusDescription[value];
  }
}
