import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alimento } from 'src/app/_model/alimento';
import { AlimentoService } from 'src/app/_service/alimento.service';

@Component({
  selector: 'app-alimento-edicion',
  templateUrl: './alimento-edicion.component.html',
  styleUrls: ['./alimento-edicion.component.css']
})
export class AlimentoEdicionComponent implements OnInit {

  id:number;
  nombre:string;
  proteina:number;
  carbohidratos:number;
  grasas:number;

  alimento:Alimento;

  constructor(
  @Inject(MAT_DIALOG_DATA) private data: Alimento,
  private dialogRef: MatDialogRef<AlimentoEdicionComponent>,
  private alimentoService:AlimentoService
  ) { }

  ngOnInit(): void {
    this.alimento=this.data;
  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close();
  }

}
