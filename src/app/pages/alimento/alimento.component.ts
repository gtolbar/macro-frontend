import { Component, OnInit } from '@angular/core';
import { Alimento } from 'src/app/_model/alimento';
import { MatTableDataSource } from '@angular/material/table';
import { AlimentoService } from 'src/app/_service/alimento.service';
import { MatDialog } from '@angular/material/dialog';
import { AlimentoEdicionComponent } from './alimento-edicion/alimento-edicion.component';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoComponent implements OnInit {

  dataSource:MatTableDataSource<Alimento>;
  displayedColumns: string[] = ['id','nombre', 'proteina', 'carbohidrato', 'grasa', 'acciones'];

  constructor(
    private alimentoService:AlimentoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.alimentoService.listar().subscribe(data=>{
      this.crearTabla(data);
    });

    this.alimentoService.getExamenCambio().subscribe(data=>{
      this.crearTabla(data);
    });

  }

  crearTabla(data: Alimento[]){
    this.dataSource= new MatTableDataSource(data);
  }

  edicionElemento(alimento: Alimento){
    this.dialog.open(AlimentoEdicionComponent, {
      data: alimento
    });
  }

  eliminarElemento(id: number){

  }

}
