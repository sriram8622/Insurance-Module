import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http : HttpClient) { }


  getBrand():Observable<any>{
    let headers= new HttpHeaders({
    'X-RapidAPI-Key': '2d52dd6451msh373b20110ab9be2p187dd2jsn1ed7e6cf0749',
   'X-RapidAPI-Host':'car-data.p.rapidapi.com'});
    return this.http.get<any>('https://car-data.p.rapidapi.com/cars/makes', { headers:headers });
  }


  getCarType(): Observable<any> {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '2d52dd6451msh373b20110ab9be2p187dd2jsn1ed7e6cf0749',
      'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    });
    return this.http.get<any>('https://car-data.p.rapidapi.com/cars/types', { headers: headers});
  }

  getCarDetails(): Observable<any> {
    // let headers = new HttpHeaders({
    //   'X-RapidAPI-Key': '2d52dd6451msh373b20110ab9be2p187dd2jsn1ed7e6cf0749',
    //   'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    // });
    return this.http.get<any>('./assets/brand.json');
  }


}
