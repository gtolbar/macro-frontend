import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alimento } from '../_model/alimento';
import { Usuario } from '../_model/Usuario';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/usuarios`
    );
  }
}
