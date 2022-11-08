import { Negociacao } from "./negociacao.js";

export class Negociacoes { 
    // encapsula uma lista
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
      this.negociacoes.push(negociacao);     
  }
   
    lista(): Array<Negociacao> {
      return this.negociacoes;
  } 
 } 