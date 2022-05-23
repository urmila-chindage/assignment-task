import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from '../interface/iemployee';

@Injectable()
export class EmployeeService{
    
    public _url="../assets/employee.json";
    constructor(private http:HttpClient){}

    getdata():Observable<Iemployee[]>{
        return this.http.get<Iemployee[]>(this._url);
    }
}