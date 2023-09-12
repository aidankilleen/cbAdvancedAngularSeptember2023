import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[box]'
})
export class BoxDirective implements OnInit, OnChanges {

  @Input() box: string = "black"; 

  constructor(private el: ElementRef) { 
    console.log("Box Directive constructor called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges called");
    console.log(this.box);
    this.el.nativeElement.style.border = `5px solid ${this.box}`;
    this.el.nativeElement.style.padding = "10px";
    this.el.nativeElement.style.margin = "10px";    
  }

  ngOnInit(): void {
    console.log("OnInit() called");
  }



}
