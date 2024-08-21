import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt';
import { StatusIconPipe } from './pipes/status-icon.pipe';
import { FilterOperationsByCustomerPipe } from './pipes/filter-operations-by-customer.pipe';
import { FormsModule } from '@angular/forms';

const LOCALE = 'pt-BR';
registerLocaleData(localePt, LOCALE);
const CURRENCY_CODE = 'BRL';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIconPipe,
    FilterOperationsByCustomerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: LOCALE },
    { provide: DEFAULT_CURRENCY_CODE, useValue: CURRENCY_CODE },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
