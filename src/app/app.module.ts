import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeService} from './service/employee.service'

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BirthdayComponent } from './birthday/birthday.component';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewjoineeComponent } from './newjoinee/newjoinee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import {TableModule} from 'primeng/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    NewjoineeComponent,
    EmployeeDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    CarouselModule,
    TableModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
