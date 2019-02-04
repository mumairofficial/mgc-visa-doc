import { Component } from "@angular/core";

@Component({
  selector: "content-section",
  template: `
  <section class="pt-5">
    <ng-content></ng-content>
  </section>
  `
})
export class ContentSectionComponent {}
