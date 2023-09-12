import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

    // delay in ms to be applied before showing the element
    @Input() set delay(time:number) {

      setTimeout(()=>{
  
        this.viewContainerRef.createEmbeddedView(
            this.templateRef);
  
      }, time);
    }
  constructor(private templateRef: TemplateRef<any>, 
              private viewContainerRef: ViewContainerRef) { 
    console.log("delay directive constructor")
  }


}
