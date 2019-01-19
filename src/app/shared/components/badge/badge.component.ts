import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "badge",
  template: `
    <span class="badge" [ngClass]="'badge-' + type">
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent {
  @Input() type = 'info'
}
