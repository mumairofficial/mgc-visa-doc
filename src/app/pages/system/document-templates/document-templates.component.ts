import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';

@Component({
  selector: 'app-system-document-templates',
  templateUrl: 'document-templates.component.html'
})
export class DocumentTemplatesComponent {

  breadcrumb: Array<BreadCrumb> = [
    {
      title: 'System',
      url: '/system/document-templates',
      active: false
    },
    {
      title: 'Document Templates',
      url: '/system/document-templates',
      active: true
    }
  ];

}
