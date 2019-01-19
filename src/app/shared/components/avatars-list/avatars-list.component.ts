import { Component, Input } from "@angular/core";
import { Image } from "../../models/image.model";

@Component({
  selector: "avatars-list",
  template: `
    <ul class="avatars">
      <li *ngFor="let img of avatars">
        <img [attr.alt]="img.alt" class="avatar" [tooltip]="img.title" [src]="img.src" />
      </li>
    </ul>
  `
})
export class AvatarsListComponent {
  @Input() avatars: Array<Image> = [];
}
