import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  exports:[
    MatFormFieldModule,
    MatCardModule,
    MatTableModule

  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
