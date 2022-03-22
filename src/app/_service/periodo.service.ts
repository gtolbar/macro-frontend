import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Periodo } from '../_model/periodo';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService extends GenericService<Periodo>{

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/periodos`
    );
  }
}
