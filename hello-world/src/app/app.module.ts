import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstMessageComponent } from './first-message/first-message.component';
import { MessageComponent } from './message/message.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMessageComponent,
    MessageComponent,
    WrapperComponent,
    AccordionComponent,
    AccordionPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
