import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent 
  ],
  imports: [
    BrowserModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
