import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentoComponent } from './pages/alimento/alimento.component';
import { DietaComponent } from './pages/dieta/dieta.component';
import { PeriodoComponent } from './pages/periodo/periodo.component';

const routes: Routes = [
  { path: 'alimento', component: AlimentoComponent},
  { path: 'dieta', component: DietaComponent},
  { path: 'periodo', component: PeriodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
