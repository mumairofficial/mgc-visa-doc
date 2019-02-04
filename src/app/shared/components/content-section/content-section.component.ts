import { Component } from "@angular/core";

@Component({
  selector: "content-section",
  template: `
  <section class="pt-5 pb-2">
    <ng-content></ng-content>
  </section>
  `
})
export class ContentSectionComponent {}
