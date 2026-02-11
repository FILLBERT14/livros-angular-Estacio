import { Routes } from '@angular/router';
import { LivrosListasComponent } from './livros-listas/livros-listas.component';
import { LivroDadosComponent } from './livros-dados/livros-dados.component';

export const routes: Routes = [
  { path: 'lista', component: LivrosListasComponent },
  { path: 'dados', component: LivroDadosComponent},
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];