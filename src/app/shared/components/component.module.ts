import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { BadgeComponent } from './badge/badge.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';
import { DirectiveModule } from '../directives/directives.module';
import {PageHeaderComponent} from '@shared/components/page-header/page-header.component';

@NgModule({
  imports: [CommonModule, RouterModule, DirectiveModule],
  declarations: [
    BreadCrumbComponent,
    ContentWrapperComponent,
    ContentSectionComponent,
    BadgeComponent,
    AvatarsListComponent,
    PageHeaderComponent
  ],
  exports: [
    BreadCrumbComponent,
    ContentWrapperComponent,
    ContentSectionComponent,
    BadgeComponent,
    AvatarsListComponent,
    PageHeaderComponent,

    DirectiveModule
  ]
})
export class ComponentsModule {}
