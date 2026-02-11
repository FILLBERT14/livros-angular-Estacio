import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

import { RouterOutlet,RouterLink } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ FormsModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})
export class AppComponent {
  title = 'livros-angular';
  constructor(
    private controleEditoraService : ControleEditoraService,
    private controleLivrosservice : ControleLivrosService
  ){}
}
