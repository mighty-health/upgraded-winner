import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ImmunizChkListComponent } from './immuniz-chk-list/immuniz-chk-list.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { TestsComponent } from './tests/tests.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SelfCareComponent } from './self-care/self-care.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmunizChkListComponent,
    ExaminationsComponent,
    TestsComponent,
    LifestyleComponent,
    SelfCareComponent
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
