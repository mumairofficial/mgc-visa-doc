import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

declare var $: any;

@Component({
  selector: "base-modal",
  templateUrl: "base-modal.component.html"
})
export class BaseModal implements OnInit, OnDestroy {
  @Input() modalId = "";
  @Input() title = "";
  @Input() size = ""
  @Input() footerDefault = true;
  @Input() headerDefault = true;

  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('modalAlert') modalAlert: ElementRef;

  public loadingState = false;
  public alertState = false;

  constructor(private renderer: Renderer2) {}

  ngOnDestroy() {
    $(this.baseModalId).modal("dispose");
  }

  ngOnInit() {
    if (!this.modalId.length) {
      throw new Error("Modal id is mandatory");
    }

    this.alertState = false;
  }

  public alert(message: string, type: string): void {
    this.alertState = true;
    this.renderer.addClass(this.modalAlert.nativeElement, `alert-${type}`);
    this.renderer.createText(message);
  }

  public toggleLoading(): void {
    this.loadingState = !this.loadingState;
  }

  public show() {
    this.alertState = false;
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
