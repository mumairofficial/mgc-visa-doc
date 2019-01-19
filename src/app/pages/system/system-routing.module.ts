import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    // {
    //     path: 'users',
    //     loadChildren: ''
    // },
    // {
    //     path: 'document-templates',
    //     loadChildren: ''
    // },
    {
        path: 'countries',
        loadChildren: './countries/countries.module#CountriesModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ]
})
export class SystemRoutingModule {}
