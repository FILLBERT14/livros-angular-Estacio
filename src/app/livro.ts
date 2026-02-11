export class Livro {
    codigo : number =0
    codEditora : number =0
    titulo : string = ''
    resumo : string = ''
    autores : string[] = []


    constructor(codigo : number =0 , codEdiora : number=0 , titulo : string ="" , resumo : string ="", autores : string[]= [""]){
       this.codigo = codigo
       this.autores = autores
       this.resumo = resumo
       this.titulo = titulo
       this.codEditora = codEdiora
    }
        
}

