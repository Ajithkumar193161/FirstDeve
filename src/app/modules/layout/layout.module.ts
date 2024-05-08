import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    SidebarModule
  ]
})
export class LayoutModule { }
