import { Injectable } from '@angular/core';
import{Editora} from "./editora"

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras : Array<Editora> = [
    {
      codEditora:1,nome:"Alta Books"
    },
    {
      codEditora:2,nome : "Pearson"
    },
   {
      codEditora:3,nome : "Sextante"
    }
    
  ]
  getNomeEditora(codEditora : number ): string{
   let filtro = this.editoras.filter(aux => aux.codEditora == codEditora)
   if(filtro.length > 0 ){
    let a = filtro[0].nome
    return a 
   }
   return "editora não cadastrada" 
  }
  getEditoras(){
    return this.editoras
  }


  constructor() { }
}
