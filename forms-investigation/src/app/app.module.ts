import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MemberFormComponent } from './member-form/member-form.component';
import { ForbiddenNameDirective } from './forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    MemberFormComponent,
    ForbiddenNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
