import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url="http://localhost/api/php/";

  //vetor
  vetor: Curso[]=[];

  //construtor
  constructor(private http:HttpClient) { }

  // Obter todos os cursos
  obterCurso(): Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res;
        return this.vetor;
      })
    )
  }

  //Cadastrar curso
  cadastratarCurso(curso:Curso): Observable<Curso[]>{
    return this.http.post<Curso>(this.url+'cadastrar',curso)
    .pipe(map((res)=>{
      this.vetor.push(res);
      return this.vetor;      
      
      
    }))
  }

}
