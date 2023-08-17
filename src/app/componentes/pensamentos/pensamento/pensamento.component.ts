import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    // essa propriedade input diz que o método pensamento vai receber informações do componente pai
    id: 0,
    conteudo: 'I love angular',
    autoria: 'Kaio',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) return 'pensamento-g'
    return 'pensamento-p'
  }

}
