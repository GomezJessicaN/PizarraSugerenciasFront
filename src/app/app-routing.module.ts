import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizarraComponent } from './components/pizarra/pizarra.component';


const routes: Routes = [
  { path: '',   redirectTo: '/pizarra', pathMatch: 'full' },
  { path:'pizarra', component: PizarraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
