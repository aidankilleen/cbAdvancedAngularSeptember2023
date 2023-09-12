import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { SummaryPipe } from './summary.pipe';



@NgModule({
  declarations: [
    MessageComponent,
    SummaryPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MessageComponent, 
    SummaryPipe
  ]
})
export class CbmodModule { }
