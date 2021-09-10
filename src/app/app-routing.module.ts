import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokepageComponent } from './pokepage/pokepage.component';


const routes: Routes = [
  { path: 'app-pokepage', component: PokepageComponent },
  { path: '',   redirectTo: '/app-pokepage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
