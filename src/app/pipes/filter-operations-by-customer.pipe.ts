import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from '../types/operation.type';

@Pipe({
  name: 'filterOperationsByCustomer'
})
export class FilterOperationsByCustomerPipe implements PipeTransform {
  transform(operations: Operation[] | null, customer: string): Operation[] {
    const CUSTOMER_IS_VALID = customer && customer.length > 0;
    const OPERATIONS_ARE_VALID = operations && operations.length > 0;

    if (!OPERATIONS_ARE_VALID) return [];
    if (!CUSTOMER_IS_VALID) return operations;

    return operations.filter(operation => operation.customerName.toLowerCase().startsWith(customer.toLowerCase()));
  }
}
