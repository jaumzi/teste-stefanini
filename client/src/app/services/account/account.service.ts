import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiVersionEnum } from 'src/app/models/enum-api-version/ApiVersionEnum';
import { ContaLegadoModel } from 'src/app/models/conta-legado/ContaLegadoModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  serverUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllUsers(apiVersion: ApiVersionEnum = ApiVersionEnum.V1): Observable<ContaLegadoModel> {
    const url = `${this.serverUrl}/api/${apiVersion}/conta-legado/get-all`;
    return this.http.get<ContaLegadoModel>(url);
  }
}
