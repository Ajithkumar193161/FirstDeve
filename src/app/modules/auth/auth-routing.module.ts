import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login',
        component: LoginComponent,
        data: {returnUrl: window.location.pathname}
      },
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
