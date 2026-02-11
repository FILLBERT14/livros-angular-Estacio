import { Injectable } from '@angular/core';
import{Livro} from "./livro"

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
       livro : Livro[] = [
        new Livro (1,1,"Use a cabeça : Java ","Java é uma experiência completa de apredinzado em programação orientada a objetos (OO) e Java.",["Bert Bates , Kathy Sierra"]),
        new Livro (2,2,"Java, como programar ","Milhões de alunos e profissionais apredem programação e desenvolvimento de software com os livros Deitel",["Paul Deitel , Harvey Deitel"])
        
       ]
    
  

  obeterlivros():Livro[]{
    return this.livro
  }
  incluir(livro : Livro){
    let aux = 0
    for(let l of this.livro){
      if (l.codigo > aux ){
        aux = l.codigo
      }
      
    }
    livro.codigo = aux + 1 
    this.livro.push(livro)

  }
  excluir(codigo : number ){
    let excluir = this.livro.findIndex(i => i.codigo === codigo)
    if (excluir !== -1){
      this.livro.splice(excluir,1)
    }
  }

  constructor() { }
}
