import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { TestsComponent } from './tests/tests.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SelfCareComponent } from './self-care/self-care.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ExaminationsComponent,
    TestsComponent,
    LifestyleComponent,
    SelfCareComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
