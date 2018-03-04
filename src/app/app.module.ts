import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";


import { AppComponent } from './app.component';
import { GraphQLModule } from '../config/graphql.module';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudentFilterComponent } from './components/student-filter/student-filter.component';
import { AnimatedButtonGroupComponent } from './components/animated-button-group/animated-button-group.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    StudentFilterComponent,
    AnimatedButtonGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
