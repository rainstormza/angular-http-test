import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Book } from './book';

@Injectable()
export class BookService {
    url = "api/books";
	constructor(private http:Http) { }
    getAllBooks(): Observable<Book[]> {
        return this.http.get(this.url)
		        .map(this.extractData)
		        .catch(this.handleError);
    }
	getBookById(bookId: string): Observable<Book[]> {
		let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');    
		let myParams = new URLSearchParams();
		myParams.append('id', bookId);			
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.url, options)
		        .map(this.extractData)
		        .catch(this.handleError);
    }
	getBooksAfterFilter(catg: string, wtr: string): Observable<Book[]> {
		let myHeaders = new Headers();
		myHeaders.set('Content-Type', 'application/json');   
		let myParams = new URLSearchParams();
		myParams.set('category', catg);
		myParams.set('writer', wtr);		
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        return this.http.get(this.url, options)
		        .map(this.extractData)
		        .catch(this.handleError);
    }
	private extractData(res: Response) {
	    let body = res.json();
        return body.data;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }
}