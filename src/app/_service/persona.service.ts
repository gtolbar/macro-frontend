import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../_model/persona';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona>{

  private personaCambio = new Subject<Persona[]>();
  private mensajeCambio = new Subject<String>();

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/personas`
    );
  }


     //get Subjects
     getPersonaCambio() {
      return this.personaCambio.asObservable();
    }

    getMensajeCambio() {
      return this.mensajeCambio.asObservable();
    }

    //set Subjects
    setPersonaCambio(persona: Persona[]) {
      this.personaCambio.next(persona);
    }

    setMensajeCambio(mensaje: string) {
      this.mensajeCambio.next(mensaje);
    }

}
