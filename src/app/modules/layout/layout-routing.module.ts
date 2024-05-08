import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('../list/list.module').then((m) => m.ListModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'Groceris/list',
        loadChildren: () =>
          import('../list/list.module').then(
            (m) => m.ListModule
          ),
        // canActivate: [AuthGuard]
      },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
