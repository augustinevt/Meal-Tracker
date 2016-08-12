import { Component } from 'angular2/core';
import { TemplateThingComponent } from './template-thing.component';

@Component({
  selector: 'my-app',
  directives: [TemplateThingComponent],
  template: `
    <div class="container">
      <h1>Template</h1>

      <template-thing></template-thing>
    </div>
  `
})
export class AppComponent {

}
