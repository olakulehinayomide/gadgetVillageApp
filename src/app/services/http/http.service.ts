import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  	apiBaseUrl: string;
  	tokenKey: string;

  	constructor(private http: HttpClient) {
	  	this.apiBaseUrl = environment.apiEndpoint;
    	this.tokenKey = environment.tokenKey;
  	}

	get(url: string, token?: string) {
		let request_url = `${this.apiBaseUrl}${url}`
		if (token === undefined || token === null || token === '') {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json'
	            })
	          };
        	return this.http.get(request_url, httpOptionsForSignedUser);
		}
		else {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json',
	                'Authorization' : this.tokenKey + token
	            })
	          };
        	return this.http.get(request_url, httpOptionsForSignedUser);
		}
		
	}

	post(url: string, data: any, token?: string)  {
		let request_url = `${this.apiBaseUrl}${url}`
		if (token === undefined || token === null || token === '') {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json'
	            })
	          };
	        let body = JSON.stringify(data);
	        return this.http.post(request_url, body, httpOptionsForSignedUser);
		}
		else {

			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json',
	                'Authorization' : this.tokenKey + token
	            })
	          };
	        let body = JSON.stringify(data);
	        return this.http.post(request_url, body, httpOptionsForSignedUser);
		}
	}

	post_blob_response(url: string, data: any, token?: string)  {
		let request_url = `${this.apiBaseUrl}${url}`
		if (token === undefined || token === null || token === '') {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json'
	            }),
	            responseType  : 'blob' as 'json'
	          };
	        let body = JSON.stringify(data);
	        return this.http.post(request_url, body, httpOptionsForSignedUser);
		}
		else {

			let httpOptionsForSignedUser = {
        headers: new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization' : this.tokenKey + token
        }),
        responseType  : 'blob' as 'json'
      };
      let body = JSON.stringify(data);
      return this.http.post(request_url, body, httpOptionsForSignedUser);
		}
	}

	put(url: string, data: any, token?: string) {
		let request_url = `${this.apiBaseUrl}${url}`
		if (token === undefined || token === null || token === '') {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json'
	            })
	          };
	        let body = JSON.stringify(data);
	        return this.http.put(request_url, body, httpOptionsForSignedUser);
		}
		else {

			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json',
	                'Authorization' : this.tokenKey + token
	            })
	          };
	        let body = JSON.stringify(data);
	        return this.http.put(request_url, body, httpOptionsForSignedUser);
		}
	}

	delete(url: string, token?: string)  {
		let request_url = `${this.apiBaseUrl}${url}`
		if (token === undefined || token === null || token === '') {
			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json'
	            })
	          };
	        return this.http.delete(request_url, httpOptionsForSignedUser);
		}
		else {

			let httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
	                'Content-Type': 'application/json',
	                'Authorization' : this.tokenKey + token
	            })
	          };
	        return this.http.delete(request_url, httpOptionsForSignedUser);
		}
	}
}
