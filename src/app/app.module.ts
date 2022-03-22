import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimentoComponent } from './pages/alimento/alimento.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DietaComponent } from './pages/dieta/dieta.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonaEdicionComponent } from './pages/persona/persona-edicion/persona-edicion.component';
import { AlimentoEdicionComponent } from './pages/alimento/alimento-edicion/alimento-edicion.component';



@NgModule({
  declarations: [
    AppComponent,
    AlimentoComponent,
    DietaComponent,
    PersonaComponent,
    PeriodoComponent,
    PersonaEdicionComponent,
    AlimentoEdicionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
