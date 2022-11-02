import { Negociacao } from './models/negociacao';

const negociacao = new Negociacao(new Date());
console.log(negociacao.volume);