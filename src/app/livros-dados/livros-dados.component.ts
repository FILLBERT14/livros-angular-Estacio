import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports: [CommonModule, FormsModule],
  selector: 'app-livro-dados',
  templateUrl: './livros-dados.component.html',
  styleUrls: ['./livros-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }
  public incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');  
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

}