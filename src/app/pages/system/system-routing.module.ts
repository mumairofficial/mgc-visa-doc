import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule'
    },
    {
        path: 'document-templates',
        loadChildren: './document-templates/document-templates.module#DocumentTemplatesModule'
    },
    {
        path: 'countries',
        loadChildren: './countries/countries.module#CountriesModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ]
})
export class SystemRoutingModule {}
