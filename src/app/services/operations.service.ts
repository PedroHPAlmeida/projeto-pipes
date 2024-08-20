import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../types/operation.type';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  getOperations(): Observable<Operation[]> {
    return new Observable(observer => {
      observer.next(shuffleArray([
        {
          customerName: 'João',
          customerStatus: 1,
          operationDate: '2023-10-31T17:30:00.00Z',
          operationValue: 500.00,
          operationRisck: 0.40,
        },
        {
          customerName: 'Maria',
          customerStatus: 2,
          operationDate: '2023-10-30T13:15:00.00Z',
          operationValue: 750.99,
          operationRisck: 0.0675,
        },
        {
          customerName: 'Pedro',
          customerStatus: 1,
          operationDate: '2023-10-29T01:15:00.00Z',
          operationValue: 3000000.00,
          operationRisck: 1.0,
        },
        {
          customerName: 'Laura',
          customerStatus: 2,
          operationDate: '2023-10-25T03:25:00.00Z',
          operationValue: 150300.35,
          operationRisck: 0.10315,
        },
        {
          customerName: 'Carlos',
          customerStatus: 1,
          operationDate: '2023-10-28T08:10:00.00Z',
          operationValue: 1250.75,
          operationRisck: 0.215,
        },
        {
          customerName: 'Ana',
          customerStatus: 2,
          operationDate: '2023-10-27T14:45:00.00Z',
          operationValue: 9800.50,
          operationRisck: 0.08125,
        },
        {
          customerName: 'Rafael',
          customerStatus: 1,
          operationDate: '2023-10-26T09:35:00.00Z',
          operationValue: 432500.00,
          operationRisck: 0.575,
        },
        {
          customerName: 'Beatriz',
          customerStatus: 2,
          operationDate: '2023-10-24T21:10:00.00Z',
          operationValue: 3200.85,
          operationRisck: 0.095,
        },
        {
          customerName: 'Lucas',
          customerStatus: 1,
          operationDate: '2023-10-23T17:20:00.00Z',
          operationValue: 780000.00,
          operationRisck: 0.65,
        },
        {
          customerName: 'Fernanda',
          customerStatus: 2,
          operationDate: '2023-10-22T11:40:00.00Z',
          operationValue: 11250.25,
          operationRisck: 0.1305,
        },
        {
          customerName: 'Gustavo',
          customerStatus: 1,
          operationDate: '2023-10-21T13:50:00.00Z',
          operationValue: 525.75,
          operationRisck: 0.225,
        },
        {
          customerName: 'Isabela',
          customerStatus: 2,
          operationDate: '2023-10-20T10:15:00.00Z',
          operationValue: 8350.60,
          operationRisck: 0.0925,
        },
        {
          customerName: 'Felipe',
          customerStatus: 1,
          operationDate: '2023-10-19T19:05:00.00Z',
          operationValue: 71500.00,
          operationRisck: 0.4235,
        },
        {
          customerName: 'Juliana',
          customerStatus: 2,
          operationDate: '2023-10-18T04:25:00.00Z',
          operationValue: 14500.85,
          operationRisck: 0.145,
        },
        {
          customerName: 'Marcelo',
          customerStatus: 1,
          operationDate: '2023-10-17T22:30:00.00Z',
          operationValue: 945250.00,
          operationRisck: 0.755,
        },
        {
          customerName: 'Camila',
          customerStatus: 2,
          operationDate: '2023-10-16T07:15:00.00Z',
          operationValue: 23500.90,
          operationRisck: 0.1105,
        },
        {
          customerName: 'Leonardo',
          customerStatus: 1,
          operationDate: '2023-10-15T16:10:00.00Z',
          operationValue: 17250.75,
          operationRisck: 0.345,
        },
        {
          customerName: 'Viviane',
          customerStatus: 2,
          operationDate: '2023-10-14T15:30:00.00Z',
          operationValue: 6250.25,
          operationRisck: 0.084,
        },
        {
          customerName: 'Rodrigo',
          customerStatus: 1,
          operationDate: '2023-10-13T12:50:00.00Z',
          operationValue: 130000.00,
          operationRisck: 0.505,
        },
        {
          customerName: 'Patrícia',
          customerStatus: 2,
          operationDate: '2023-10-12T09:25:00.00Z',
          operationValue: 19250.85,
          operationRisck: 0.092,
        },
        {
          customerName: 'Bruno',
          customerStatus: 1,
          operationDate: '2023-10-11T20:05:00.00Z',
          operationValue: 65500.00,
          operationRisck: 0.485,
        },
        {
          customerName: 'Carolina',
          customerStatus: 2,
          operationDate: '2023-10-10T18:45:00.00Z',
          operationValue: 8250.75,
          operationRisck: 0.1025,
        },
        {
          customerName: 'Vitor',
          customerStatus: 1,
          operationDate: '2023-10-09T14:10:00.00Z',
          operationValue: 115500.00,
          operationRisck: 0.555,
        },
        {
          customerName: 'Tatiana',
          customerStatus: 2,
          operationDate: '2023-10-08T06:50:00.00Z',
          operationValue: 7200.35,
          operationRisck: 0.087,
        },
        {
          customerName: 'Fernando',
          customerStatus: 1,
          operationDate: '2023-10-07T03:05:00.00Z',
          operationValue: 40500.00,
          operationRisck: 0.325,
        },
        {
          customerName: 'Luana',
          customerStatus: 2,
          operationDate: '2023-10-06T05:15:00.00Z',
          operationValue: 13250.85,
          operationRisck: 0.095,
        },
        {
          customerName: 'Eduardo',
          customerStatus: 1,
          operationDate: '2023-10-05T21:35:00.00Z',
          operationValue: 182500.00,
          operationRisck: 0.625,
        },
        {
          customerName: 'Aline',
          customerStatus: 2,
          operationDate: '2023-10-04T10:20:00.00Z',
          operationValue: 9350.55,
          operationRisck: 0.1035,
        },
        {
          customerName: 'Thiago',
          customerStatus: 1,
          operationDate: '2023-10-03T16:45:00.00Z',
          operationValue: 51500.00,
          operationRisck: 0.435,
        },
        {
          customerName: 'Simone',
          customerStatus: 2,
          operationDate: '2023-10-02T11:10:00.00Z',
          operationValue: 8250.25,
          operationRisck: 0.101,
        },
        {
          customerName: 'Jorge',
          customerStatus: 1,
          operationDate: '2023-10-01T23:25:00.00Z',
          operationValue: 105500.00,
          operationRisck: 0.515,
        },
        {
          customerName: 'Letícia',
          customerStatus: 2,
          operationDate: '2023-09-30T19:15:00.00Z',
          operationValue: 8250.15,
          operationRisck: 0.0935,
        },
        {
          customerName: 'Roberto',
          customerStatus: 1,
          operationDate: '2023-09-29T08:20:00.00Z',
          operationValue: 220000.00,
          operationRisck: 0.645,
        },
        {
          customerName: 'Mônica',
          customerStatus: 2,
          operationDate: '2023-09-28T13:50:00.00Z',
          operationValue: 10250.85,
          operationRisck: 0.096,
        },
        {
          customerName: 'Alexandre',
          customerStatus: 1,
          operationDate: '2023-09-27T03:05:00.00Z',
          operationValue: 65000.00,
          operationRisck: 0.465,
        },
        {
          customerName: 'Elaine',
          customerStatus: 2,
          operationDate: '2023-09-26T14:25:00.00Z',
          operationValue: 8250.55,
          operationRisck: 0.0885,
        },
        {
          customerName: 'Sérgio',
          customerStatus: 1,
          operationDate: '2023-09-25T18:30:00.00Z',
          operationValue: 125000.00,
          operationRisck: 0.535,
        },
        {
          customerName: 'Raquel',
          customerStatus: 2,
          operationDate: '2023-09-24T09:40:00.00Z',
          operationValue: 7200.75,
          operationRisck: 0.0795,
        },
        {
          customerName: 'Cláudio',
          customerStatus: 1,
          operationDate: '2023-09-23T01:15:00.00Z',
          operationValue: 95000.00,
          operationRisck: 0.485,
        },
        {
          customerName: 'Jéssica',
          customerStatus: 2,
          operationDate: '2023-09-22T11:50:00.00Z',
          operationValue: 5300.25,
          operationRisck: 0.075,
        },
        {
          customerName: 'Renato',
          customerStatus: 1,
          operationDate: '2023-09-21T07:30:00.00Z',
          operationValue: 140000.00,
          operationRisck: 0.575,
        },
        {
          customerName: 'Adriana',
          customerStatus: 2,
          operationDate: '2023-09-20T20:05:00.00Z',
          operationValue: 6250.95,
          operationRisck: 0.0855,
        },
        {
          customerName: 'Maurício',
          customerStatus: 1,
          operationDate: '2023-09-19T15:25:00.00Z',
          operationValue: 112500.00,
          operationRisck: 0.525,
        },
        {
          customerName: 'Paula',
          customerStatus: 2,
          operationDate: '2023-09-18T08:15:00.00Z',
          operationValue: 4500.75,
          operationRisck: 0.0725,
        },
        {
          customerName: 'Fábio',
          customerStatus: 1,
          operationDate: '2023-09-17T13:20:00.00Z',
          operationValue: 87500.00,
          operationRisck: 0.475,
        },
        {
          customerName: 'Regina',
          customerStatus: 2,
          operationDate: '2023-09-16T05:35:00.00Z',
          operationValue: 6500.85,
          operationRisck: 0.0785,
        },
        {
          customerName: 'Hugo',
          customerStatus: 1,
          operationDate: '2023-09-15T21:10:00.00Z',
          operationValue: 115000.00,
          operationRisck: 0.525,
        }
      ]));
      observer.complete();
    });
  }
}

function shuffleArray(array: Operation[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
