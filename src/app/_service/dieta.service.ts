import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dieta } from '../_model/dieta';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class DietaService extends GenericService<Dieta>{

  constructor(
    protected http:HttpClient
  ) {
    super(
      http,
      `${environment.HOST}/dietas`
    );
  }
}
