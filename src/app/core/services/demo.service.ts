import {HttpClient}  from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable()
export class demoService{

    constructor(private http: HttpClient){}

    getBrand(): Observable<any>{
        return this.http.get<any>('../assets/brand.json');
    }

}