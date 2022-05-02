import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiVersionEnum } from 'src/models/ApiVersionEnum';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  serverUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllUsers(apiVersion: ApiVersionEnum = ApiVersionEnum.v1) {
    const url = `${this.serverUrl}/api/${apiVersion}/conta-legado/get-all`;
    return this.http.get(url);
  }
}
