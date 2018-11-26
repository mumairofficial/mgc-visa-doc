import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { BasicLayoutComponent } from './layout/basic-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LeftNavigationComponent,
    BasicLayoutComponent,
    BlankLayoutComponent
  ],
  exports: [LeftNavigationComponent, BasicLayoutComponent, BlankLayoutComponent]
})
export class ComponentsModule {}
