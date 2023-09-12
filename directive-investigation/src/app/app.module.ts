import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxDirective } from './box.directive';
import { FormsModule } from '@angular/forms';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
