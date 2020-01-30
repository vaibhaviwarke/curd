import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

private _url='http://172.16.8.93:3000/';
//private _url='http://localhost:3000/';

   createUser(data){
     console.log("get clicked ",data);
     return this._http.post(this._url+"register",data);
  }
  getUser()
  {  
    return this._http.get(this._url+"getUser");
  }
  
  deleteUser(u){
   
    return this._http.post(this._url+"deleteUser",u);
  }
  
  updateUser(data){
    console.log("get clicked ",data);
    return this._http.post(this._url+"updateUser",data);
  }
  
  
  }
