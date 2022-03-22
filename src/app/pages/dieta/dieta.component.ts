import { Component, OnInit } from '@angular/core';
import { Dieta } from 'src/app/_model/dieta';
import { DietaService } from 'src/app/_service/dieta.service';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.css']
})
export class DietaComponent implements OnInit {

  prueba:Dieta[];

  constructor(
    private dietaService:DietaService
  ) { }

  ngOnInit(): void {
    this.dietaService.listar().subscribe(data=>{
      this.prueba=data;
    })
  }

}
