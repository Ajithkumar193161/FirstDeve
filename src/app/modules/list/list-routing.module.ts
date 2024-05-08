import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoComponent } from './compo/compo.component';
import { ListModule } from './list.module';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
  path: '',
  component: TestComponent,
  children: [
    {
      path: 'compo',
      component: CompoComponent,
      data: {returnUrl: window.location.pathname}
    },
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {

 }
