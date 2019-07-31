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
		const requestUrl = `${this.apiBaseUrl}${url}`;
		if (token === undefined || token === null || token === '') {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
                'Content-Type': 'application/json'
	            })
	          };
        	return this.http.get(requestUrl, httpOptionsForSignedUser);
		} else {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : this.tokenKey + token
	            })
	          };
        	return this.http.get(requestUrl, httpOptionsForSignedUser);
		}
		
	}

	post(url: string, data: any, token?: string)  {
		const requestUrl = `${this.apiBaseUrl}${url}`;
		if (token === undefined || token === null || token === '') {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({
                'Content-Type': 'application/json'
	            })
	          };
			  const body = JSON.stringify(data);
	        return this.http.post(requestUrl, body, httpOptionsForSignedUser);
		}
		else {

			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization' : this.tokenKey + token
	            })
	          };
			  const body = JSON.stringify(data);
	        return this.http.post(requestUrl, body, httpOptionsForSignedUser);
		}
	}

	post_blob_response(url: string, data: any, token?: string)  {
		const requestUrl = `${this.apiBaseUrl}${url}`;
		if (token === undefined || token === null || token === '') {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
                'Content-Type': 'application/json'
	            }),
	            responseType  : 'blob' as 'json'
			};
			const body = JSON.stringify(data);
	        return this.http.post(requestUrl, body, httpOptionsForSignedUser);
		}
		else {

			const httpOptionsForSignedUser = {
				headers: new HttpHeaders({
					'Content-Type': 'application/json',
					'Authorization' : this.tokenKey + token
				}),
				responseType  : 'blob' as 'json'
	      	};
	      	const body = JSON.stringify(data);
	      	return this.http.post(requestUrl, body, httpOptionsForSignedUser);
		}
	}

	put(url: string, data: any, token?: string) {
		const requestUrl = `${this.apiBaseUrl}${url}`;
		if (token === undefined || token === null || token === '') {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({
                'Content-Type': 'application/json'
	            })
	          };
			  const body = JSON.stringify(data);
	        return this.http.put(requestUrl, body, httpOptionsForSignedUser);
		} else {
            const httpOptionsForSignedUser = {
            	headers: new HttpHeaders({
	                'Content-Type': 'application/json',
	                'Authorization' : this.tokenKey + token
	            })
			};
			const body = JSON.stringify(data);
	        return this.http.put(requestUrl, body, httpOptionsForSignedUser);
		}
	}

	delete(url: string, token?: string)  {
		const requestUrl = `${this.apiBaseUrl}${url}`;
		if (token === undefined || token === null || token === '') {
			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({ 
                'Content-Type': 'application/json'
	            })
			};
	        return this.http.delete(requestUrl, httpOptionsForSignedUser);
		} else {

			const httpOptionsForSignedUser = {
	            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization' : this.tokenKey + token
	            })
			};
	        return this.http.delete(requestUrl, httpOptionsForSignedUser);
		}
	}
}
