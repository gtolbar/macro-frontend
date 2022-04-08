import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlimentoDTO } from '../_dto/alimentoDTO';

@Injectable({
  providedIn: 'root'
})
export class ConsultaAlimentoService {

  private alimentoCambio = new Subject<AlimentoDTO[]>();
  private mensajeCambio = new Subject<String>();

  private url:string =`${environment.HOST}/alimentos`

  constructor(
    protected http:HttpClient
  ) { }

    consultaAlimentos(){
      return this.http.get<AlimentoDTO[]>(`${this.url}/consulta-alimentos`);
    }


      //get Subjects
    getConsultaAlimentoCambio() {
      return this.alimentoCambio.asObservable();
    }

    getMensajeCambio() {
      return this.mensajeCambio.asObservable();
    }

    //set Subjects
    setConsultaAlimentoCambio(alimento: AlimentoDTO[]) {
      this.alimentoCambio.next(alimento);
    }

    setMensajeCambio(mensaje: string) {
      this.mensajeCambio.next(mensaje);
    }
}
