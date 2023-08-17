import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.cria(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    });
  }
  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
