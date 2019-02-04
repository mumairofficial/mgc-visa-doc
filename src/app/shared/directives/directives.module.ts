import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { MdIconDirective } from './md-icon.directive';

@NgModule({
  declarations: [TooltipDirective, MdIconDirective],
  exports: [TooltipDirective, MdIconDirective]
})
export class DirectiveModule {}
