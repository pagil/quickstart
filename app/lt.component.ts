import {Component} from '@angular/core';

@Component({
  selector: 'lt-dto',
  template: `
    <h2>Listing Transaction</h2>
    {{title}}
  `
})
export class LtComponent {
  title = 'Title for the Listing Transaction dispay component';
}
