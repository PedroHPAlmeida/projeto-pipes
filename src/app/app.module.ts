import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig, registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt';
import { StatusIconPipe } from './pipes/status-icon.pipe';
import { FilterOperationsByCustomerPipe } from './pipes/filter-operations-by-customer.pipe';

const LOCALE = 'pt-BR';
registerLocaleData(localePt, LOCALE);
const DATE_OPTIONS: DatePipeConfig = {
  dateFormat: 'dd/MM/yyyy',
  timezone: '-0300',
};
const CURRENCY_CODE = 'BRL';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIconPipe,
    FilterOperationsByCustomerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: LOCALE },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: DATE_OPTIONS },
    { provide: DEFAULT_CURRENCY_CODE, useValue: CURRENCY_CODE },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
