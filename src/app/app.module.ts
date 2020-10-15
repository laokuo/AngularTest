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
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { TestBootsrapComponent } from './test-bootsrap/test-bootsrap.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { SonComponent } from './son/son.component';
import { HighlightDirective } from './highlight.directive';
import { NoBlankDirective } from './no-blank.directive';
import { TestDataComponent } from './test-data/test-data.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestJQueryComponent,
    TestComponent,
    TestInterfaceComponent,
    TestReactiveFormComponent,
    TestCheckComponent,
    TestDialogComponent,
    TestBootsrapComponent,
    TestViewChildComponent,
    SonComponent,
    HighlightDirective,
    NoBlankDirective,
    TestDataComponent,
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
