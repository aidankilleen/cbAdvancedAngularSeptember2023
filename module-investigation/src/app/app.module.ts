import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CbmodModule } from './cbmod/cbmod.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    CbmodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
