import { Component} from '@angular/core';
import{FormBuilder, FormControl,FormGroup,Validators}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
  error:string=''
registerForm:FormGroup= new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  rePassword :new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  phone :new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])


});


  constructor(public _Auth:AuthService ,public _Router:Router){

}
submitregisterform(registerForm:FormGroup){
  //console.log(registerForm.value);
  
  if(registerForm.valid){
    //console.log("enter");
    
    this._Auth.register(registerForm.value).subscribe((response)=>{
    /* console.log(response);
    console.log("enter"); */
    
       if (response.message == 'success') {
     // console.log("success");
     this._Router.navigate(['login'])
      
     }
     else{
     
      
      this.error=response.message
     // console.log(response.errors.message +"emailerror");
      
     }
      
    })
  }
}
}
