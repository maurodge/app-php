import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { CursoService } from './curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //UL base
  url="http://localhost/api/php/";

  // vetor de cursos
  
  vetor: Curso[]=[];
  
  // objeto da classe curso
  curso = new Curso();

 //construtor
 constructor(
  private curso_servico: CursoService)
 { }
 
 // inicializador
 ngOnInit() {
  // ao iniciar o sistema, deverá listar os cursos
  this.selecao();
 }

 // metodo de cadastro
 cadastro(){
  this.curso_servico.cadastratarCurso(this.curso).subscribe(
    (res: Curso[]) => {    
      this.curso.nomeCurso = "";
      this.curso.valorCurso = 0;
      //atualizando listagem com o novo cadastro
      this.selecao(); 
    } 
  );
 }

 //seleçao
 selecao(){
  this.curso_servico.obterCurso().subscribe(
    (res: Curso[]) => {
      this.vetor = res;
    }
  )
 }

 //alterar
 alterar(){
  
 }

 //remover
 remover(){
  
 }
}
