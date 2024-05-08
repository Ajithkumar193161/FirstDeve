import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListRoutingModule } from './list-routing.module';
import { CompoComponent } from './compo/compo.component';
import { TestComponent } from './test/test.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {  MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule,} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    CompoComponent,
    TestComponent
  ],
  imports: [
    CommonModule,MatCardModule,MatSliderModule,MatCheckboxModule,MatTableModule,MatButtonModule,MatSlideToggleModule
    ,ListRoutingModule,MatFormFieldModule,MatSelectModule,MatInputModule,ReactiveFormsModule,FormsModule,MatDatepickerModule,
  ]
})
export class ListModule { }
