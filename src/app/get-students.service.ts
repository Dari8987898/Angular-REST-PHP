import { Student } from './tabella/studentInterface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  	providedIn: 'root'
})

export class GetStudentsService 
{
	constructor(private http : HttpClient) {} //costruttore della classe GetStudentsService
	
	getData(apiUrl : string) : Observable<any> //Metodo GET con parametri richiesti da API (per vedere gli impiegati)
	{
    	return this.http.get<Student[]>(apiUrl)
        .pipe(
        	retry(1),
        	catchError(this.handleError)
      	);
	}

  	postData(apiUrl : string, body : any) : Observable<Student[]> //Metodo POST con parametri richiesti da API (per aggiungere impiegati)
	{
		return this.http.post<Student[]>(apiUrl, body)
		.pipe(
			retry(1),
		    catchError(this.handleError)
		);
	}

	deleteData(apiUrl : string) : Observable<Student[]> //Metodo DELETE con parametri richiesti da API (per cancellare impiegati)
	{
		return this.http.delete<Student[]>(apiUrl)
		.pipe(
			retry(1),
			catchError(this.handleError)
		);
	}

	putData(apiUrl : string, body : any) : Observable<Student[]> //Metodo DELETE con parametri richiesti da API (per cancellare impiegati)
	{
		return this.http.put<Student[]>(apiUrl, body)
		.pipe(
			retry(1),
			catchError(this.handleError)
		);
	}

	public handleError(handleError: any): import("rxjs").OperatorFunction<Student[], any> //Nel caso di errore
  	{
    	throw new Error('Method not implemented.');
  	}
}
