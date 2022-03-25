import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [],
  exports:[
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
