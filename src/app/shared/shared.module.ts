import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/component.module';

@NgModule({
  imports: [ComponentsModule],
  exports: [ComponentsModule]
})
export class SharedModule {}