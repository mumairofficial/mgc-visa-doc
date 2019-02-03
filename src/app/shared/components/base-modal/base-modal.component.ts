import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";

declare var $: any;

@Component({
  selector: "base-modal",
  templateUrl: "base-modal.component.html"
})
export class BaseModal implements OnInit, OnDestroy {
  @Input() modalId = "";
  @Input() title = "";
  @Input() footerDefault = true;
  @Input() headerDefault = true;

  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnDestroy() {
    $(this.baseModalId).modal("dispose");
  }

  ngOnInit() {
    if (!this.modalId.length) {
      throw new Error("Modal id is mandatory");
    }
  }

  public show() {
    $(this.baseModalId).modal("show");
  }

  public onConfirm(): void {
    this.confirm.emit(true);
  }

  public onClose(): void {
    $(this.baseModalId).modal("hide");
    this.close.emit(true);
  }

  private get baseModalId(): string {
    return `#${this.modalId}`;
  }
}
