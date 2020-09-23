import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './testDollarEvent/test.component';
import { TestJQueryComponent } from './test-jquery/test-jquery.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';
import { TestReactiveFormComponent } from './test-reactive-form/test-reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestCheckComponent } from './test-check/test-check.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestJQueryComponent,
    TestComponent,
    TestInterfaceComponent,
    TestReactiveFormComponent,
    TestCheckComponent
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
