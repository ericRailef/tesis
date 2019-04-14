import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegistroActividadComponent } from '../app/components/registro-actividad/registro-actividad.component';
import { EliminarActividadComponent } from '../app/components/eliminar-actividad/eliminar-actividad.component';
import { VisualizaActividadComponent } from '../app/components/visualiza-actividad/visualiza-actividad.component';
const routes: Routes = [
  
  { path: 'visualiza-actividad', component: VisualizaActividadComponent},
  { path: 'eliminar-actividad', component: EliminarActividadComponent},
  { path: 'registro-actividad', component: RegistroActividadComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
