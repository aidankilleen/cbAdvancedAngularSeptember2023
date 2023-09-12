import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionPanelComponent) panels!: QueryList<AccordionPanelComponent>;

  title!: string;

  constructor() {
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() called");

    // set first panel active = true
    //this.panels.toArray()[0].active = true;

    // find all open panels
    let open = this.panels.filter(panel => panel.active);

    // if no open panels then open panel 1
    if (open.length == 0) {
      this.panels.first.active = true;
      this.openPanel(this.panels.first);
    }

    // add an event handler to each panel
    this.panels.forEach(panel => {

      panel.toggle.subscribe(()=>{
        this.openPanel(panel);
      })
    });
  }

  openPanel(toggledPanel: AccordionPanelComponent) {
    // toggle all panels excpet for toggledPanel
    this.panels
      .filter(panel => panel != toggledPanel)
      .forEach(panel => panel.active = false);
  }
}
