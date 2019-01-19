import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    BreadCrumbComponent,
    ContentWrapperComponent,
    ContentSectionComponent,
    BadgeComponent
  ],
  exports: [
    BreadCrumbComponent,
    ContentWrapperComponent,
    ContentSectionComponent,
    BadgeComponent
  ]
})
export class ComponentsModule {}
