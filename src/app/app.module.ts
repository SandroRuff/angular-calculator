import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableInputComponent } from './components/tables/table-input/table-input.component';
import { AddButtonComponent } from './components/ui-components/add-button/add-button.component';
import { TableOperatorsComponent } from './components/tables/table-operators/table-operators.component';
import { TableResultComponent } from './components/tables/table-result/table-result.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInputComponent,
    AddButtonComponent,
    TableOperatorsComponent,
    TableResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
