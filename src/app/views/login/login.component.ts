import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { EncrDecrService } from 'src/app/services/EncrDecrService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
//login form group
  login_form: FormGroup;
  Message;
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router,private EncrDecr: EncrDecrService) {
    this.login_form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  // onSubmit function for login
  onSubmit() {   
    console.log(this.login_form.value)
      this.auth.login(this.login_form.value).subscribe(res => {
        if (res['type'] == 'success' && res['code'] == 200) { 
          console.log("res........", res)
          localStorage.setItem(environment.TOKEN_KEY, JSON.stringify(res['result']));
          localStorage.setItem("isAuthorize", "true");
          this.router.navigate(['/app/dashboard'])
        } else {
          this.Message = res['message'];
          this.login_form.reset();
          setTimeout(() => {
            delete this.Message;
          }, 5000);
        }
      });
  }
  
  ngOnInit() {
    // var pass = "P@ss";
    // var encoder = new TextEncoder();
    // var test = encoder.encode(pass);
    // console.log('eeeeeeeeeeeeeeeeeeee',test);
    // var test = encoder.encode(pass);
    // var decrypted = this.EncrDecr.get('P@ss', encrypted);
    
    // console.log('Encrypted :' + decrypted);

  }
  ngAfterContentInit(){
    window.scrollTo(0,0);
  }
}
