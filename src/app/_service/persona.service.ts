import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alimento } from '../_model/alimento';
import { Persona } from '../_model/persona';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends GenericService<Persona>{

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/personas`
    );
  }
}
