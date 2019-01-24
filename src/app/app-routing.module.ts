import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './pages/auth/auth.module#AuthModule'
      }
    ]
  },

  // for authorized pages
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [],
    children: [
      {
        path: 'settings',
        loadChildren: './pages/settings/settings.module#SettingsModule'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'system',
        loadChildren: './pages/system/system.module#SystemModule'
      },
      {
        path: 'employees',
        loadChildren: './pages/employees/employees.module#EmployeesModule'
      },
      {
        path: 'visa-applications',
        loadChildren: './pages/visa-applications/visa-applications.module#VisaApplicationsModule'
      }
    ]
  },

  // error pages
  {
    path: 'error',
    component: BlankLayoutComponent,
    loadChildren: './pages/error/error.module#ErrorModule'
  },

  // other than defined path
  // { path: '**', redirectTo: 'error/404' }
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
