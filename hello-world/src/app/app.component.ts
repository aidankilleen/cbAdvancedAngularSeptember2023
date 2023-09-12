import { Component } from '@angular/core';
import Message from './message/message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>


    <accordion>
      <accordion-panel title="Panel 1">
        <p>This is panel 1</p>
      </accordion-panel>
      <accordion-panel title="Panel 2">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul> 
      </accordion-panel>
      <accordion-panel title="Panel 3" [open]="true">
        <img src="https://www.centralbank.ie/images/default-source/news-articles/nwq-exterior/2023/hjl_bank-of-ireland_hc_022a--756x350.jpg?sfvrsn=c61c991d_3" width="300"/>
      </accordion-panel>
      <accordion-panel title="Panel 4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusantium ullam fuga natus expedita placeat iste pariatur totam aliquam provident architecto vitae odit molestiae at fugiat possimus dolorum, qui sunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis sapiente vero provident molestiae cupiditate obcaecati nulla dolor dolorem, nihil animi id ab possimus qui voluptas, corporis odio temporibus alias.</p>
      </accordion-panel>
    </accordion>

    <hr>

    <accordion>
      <accordion-panel title="News 1">
        <p>News Item 1</p>
      </accordion-panel>
      <accordion-panel title="News 2">
        <p>News Item 2</p>
      </accordion-panel>
      <accordion-panel title="News 3">
        <p>News Item 3</p>
      </accordion-panel>
    </accordion>

<!--
    <wrapper>
      <h2>Wrapped Content</h2>
      <p>This is wrapped content</p>
    </wrapper>

    <wrapper>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </wrapper>
-->    

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';

  message: Message = new Message("Message 1", "This is message 1");

  
}
