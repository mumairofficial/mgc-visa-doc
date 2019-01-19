import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocumentTemplatesComponent} from './document-templates.component';
import {SharedModule} from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DocumentTemplatesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class DocumentTemplatesRoutingModule {}

@NgModule({
  declarations: [DocumentTemplatesComponent],
  imports: [SharedModule, DocumentTemplatesRoutingModule]
})
export class DocumentTemplatesModule {}
