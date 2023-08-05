import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData =new BehaviorSubject(null)
  constructor(private _Httpclient:HttpClient,private _Router:Router) { 

    if (localStorage.getItem('userToken')!=null) {
      this.saveUserData();
    }
  }
  saveUserData(){
    let enCodedUserData=JSON.stringify(localStorage.getItem('userToken'))
    this.userData.next( jwtDecode(enCodedUserData))
    console.log(this.userData);
    
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null)
    this._Router.navigate(['login'])


  }
    register(formdata:object):Observable<any>{
      return  this._Httpclient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`,formdata);
     
    }
    
    login(formdata:object):Observable<any>{
      return  this._Httpclient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,formdata);
     
    }
}
