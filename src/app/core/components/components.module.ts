import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { BasicLayoutComponent } from './layout/basic-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule,SharedModule, RouterModule],
  declarations: [
    LeftNavigationComponent,
    BasicLayoutComponent,
    BlankLayoutComponent
  ],
  exports: [LeftNavigationComponent, BasicLayoutComponent, BlankLayoutComponent]
})
export class ComponentsModule {}
