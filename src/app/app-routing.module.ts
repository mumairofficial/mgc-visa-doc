import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { BlankLayoutComponent } from './core/components/layout/blank-layout.component';
import { BasicLayoutComponent } from './core/components/layout/basic-layout.component';

const routes: Routes = [
  // Main redirect
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },

  // un-authorized pages
  // {
  //   path: '',
  //   component: BlankLayoutComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: null
  //     }
  //   ]
  // },

  // for authorized pages
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      }
    ]
  },

  // other than defined path
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
