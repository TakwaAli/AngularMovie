import { Component } from '@angular/core';
import{FormBuilder, FormControl,FormGroup,Validators}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string=''
  Loginform:FormGroup= new FormGroup({
    
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
     
  });
  constructor(public _Auth:AuthService ,public _Router:Router){

  }


  submitLoginform(Loginform:FormGroup){
  
    
    if(Loginform.valid){
   
      
      this._Auth.login(Loginform.value).subscribe((response)=>{
      
         if (response.message == 'success') {
          //console.log(response.token);
          
       localStorage.setItem('userToken',response.token)
       this._Auth.saveUserData();
       this._Router.navigate(['home'])
        
       }
       else{
   
        this.error=response.message

       }
        
      })
    }
  }
  
}
