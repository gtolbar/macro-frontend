import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alimento } from '../_model/alimento';
import { GenericService } from './generic.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService extends GenericService<Alimento>{

  private alimentoCambio = new Subject<Alimento[]>();
  private mensajeCambio = new Subject<String>();


  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/alimentos`
    );
  }

     //get Subjects
     getExamenCambio() {
      return this.alimentoCambio.asObservable();
    }

    getMensajeCambio() {
      return this.mensajeCambio.asObservable();
    }

    //set Subjects
    setExamenCambio(examenes: Alimento[]) {
      this.alimentoCambio.next(examenes);
    }

    setMensajeCambio(mensaje: string) {
      this.mensajeCambio.next(mensaje);
    }


}
