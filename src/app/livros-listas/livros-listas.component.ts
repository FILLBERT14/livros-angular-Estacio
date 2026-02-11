import { Component,OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-livros-listas',
  imports: [CommonModule],
  templateUrl: './livros-listas.component.html',
  styleUrl: './livros-listas.component.css'
})
export class LivrosListasComponent implements OnInit {
  public editoras : Editora[] = [];
  public livros : Livro[]=[];
  
  constructor (private servEditora : ControleEditoraService, private  servLivros : ControleLivrosService){}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obeterlivros();
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obeterlivros();
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
