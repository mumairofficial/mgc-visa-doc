import { Component } from "@angular/core";

@Component({
  selector: "content-section",
  template: `
  <section class="py-4 py-lg-5">
    <ng-content></ng-content>
  </section>
  `
})
export class ContentSectionComponent {}
