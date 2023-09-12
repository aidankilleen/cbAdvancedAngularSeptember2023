import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MemberDialogComponent } from './member-dialog/member-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberDialogComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
