import { Component, OnInit, ViewChild } from '@angular/core';
import { Alimento } from 'src/app/_model/alimento';
import { MatTableDataSource } from '@angular/material/table';
import { AlimentoService } from 'src/app/_service/alimento.service';
import { MatDialog } from '@angular/material/dialog';
import { AlimentoEdicionComponent } from './alimento-edicion/alimento-edicion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AlimentoDTO } from 'src/app/_dto/alimentoDTO';
import { ConsultaAlimentoService } from 'src/app/_service/consultaAlimento.service';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  dataSource:MatTableDataSource<AlimentoDTO>;
  displayedColumns: string[] = ['nombre', 'proteina', 'carbohidrato', 'grasa','cantidad','caloria', 'acciones'];

  constructor(
    private alimentoService:AlimentoService,
    private consultaAlimentoService:ConsultaAlimentoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.consultaAlimentoService.consultaAlimentos().subscribe(data=>{
      this.crearTabla(data);
    });

    this.consultaAlimentoService.getConsultaAlimentoCambio().subscribe(data=>{
      this.crearTabla(data);

    });

    this.alimentoService.getMensajeCambio().subscribe((data:string) => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        verticalPosition: "bottom",
        horizontalPosition: "center"
      });
    });
  }

  crearTabla(data: AlimentoDTO[]){
    this.dataSource= new MatTableDataSource(data);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  edicionElemento(alimento: Alimento){
    this.dialog.open(AlimentoEdicionComponent, {
      data: alimento
    });
  }

  registrarElemento(){
    this.dialog.open(AlimentoEdicionComponent);
  }

  eliminarElemento(id: number){
    this.alimentoService.eliminar(id).subscribe(()=>{
      this.consultaAlimentoService.consultaAlimentos().subscribe(data=>{
        this.consultaAlimentoService.setConsultaAlimentoCambio(data);
        this.alimentoService.setMensajeCambio("SE ELIMINO CON EXITO");
      });
    });
  }

}
