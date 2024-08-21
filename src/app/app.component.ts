import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from './types/operation.type';
import { OperationsService } from './services/operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  operations$: Observable<Operation[]> | undefined;
  customerName: string = '';

  constructor(private readonly _operationsService: OperationsService) { }

  ngOnInit(): void {
    this.operations$ = this._operationsService.getOperations();
  }
}
