import { NgModule } from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { MdIconDirective } from "./md-icon.directive";
import { BootstrapFormControl } from "./form-control.directive";
import { AriaDescribedByDirective } from "./aria-described-by.directive";
import { AriaLabelDirective } from "./aria-label.directive";

@NgModule({
  declarations: [
    TooltipDirective,
    MdIconDirective,
    BootstrapFormControl,
    AriaDescribedByDirective,
    AriaLabelDirective
  ],
  exports: [
    TooltipDirective,
    MdIconDirective,
    BootstrapFormControl,
    AriaDescribedByDirective,
    AriaLabelDirective
  ]
})
export class DirectiveModule {}
