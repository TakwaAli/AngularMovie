import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin:boolean=false;
  constructor(private _Authserve:AuthService){}
  ngOnInit(): void {
   /*  if (this._Authserve.userData != null) {
      this.islogin=true;
    } */
    this._Authserve.userData.subscribe(()=>{
      if (this._Authserve.userData.getValue() != null) {
        this.islogin=true;
      }
      else{
        this.islogin=false;
      }
    })
  }
  logout(){
    this._Authserve.logout();
  }


}
