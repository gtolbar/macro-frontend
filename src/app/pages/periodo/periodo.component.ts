import { Component, OnInit } from '@angular/core';
import { Periodo } from 'src/app/_model/periodo';
import { PeriodoService } from 'src/app/_service/periodo.service';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent implements OnInit {

  prueba:Periodo[];

  constructor(
   private periodoService:PeriodoService,
  ) { }

  ngOnInit(): void {
    this.periodoService.listar().subscribe(data=>{
      this.prueba=data;
    })
  }

}
