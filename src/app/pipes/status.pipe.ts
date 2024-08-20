import { Pipe, PipeTransform } from '@angular/core';
import { CustomerStatus } from '../types/operation.type';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {
    const statusDescription: { [key: number]: string } = {
      [CustomerStatus.ACTIVE]: 'Ativo',
      [CustomerStatus.INACTIVE]: 'Inativo',
    }

    if (!(value in statusDescription)) {
      return 'Status Inválido';
    }
    return statusDescription[value];
  }
}