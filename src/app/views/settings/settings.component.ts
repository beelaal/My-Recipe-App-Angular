import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleCasePipe, DatePipe } from '@angular/common'; 
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  username: string;
  Password: string;
  email: string;
  mobile: string;
  user: any;
  sex: string;
  bio: string;
  first_name: string;
  last_name: string; 
  profileEdit_Form: FormGroup;
  constructor(private auth: AuthService, private formBuilder: FormBuilder,private titlecasePipe:TitleCasePipe,public snackbar: MatSnackBar,private datePipe: DatePipe ) {
    this.profileEdit_Form = this.formBuilder.group({
      username: [{value: ''}, Validators.required],
      mobile: ['', Validators.required],
      sex: ['', Validators.required],
      bio: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: [{value: ''}, Validators.required]
    });
  }
   
  getUserData() {
    this.user = JSON.parse(localStorage.getItem('Identity')); 
    let userId = {
      users_id: this.user.user.users_id
    }
    this.auth.getUserDetails(userId).subscribe((res:any) => { 
      res = res.result;
      this.profileEdit_Form.get('username').setValue(res['username']);
      this.profileEdit_Form.get('email').setValue(res['email']);
      this.profileEdit_Form.get('sex').setValue(res['sex'] ? res['sex']: "");
      this.profileEdit_Form.get('first_name').setValue(res['first_name']);
      this.profileEdit_Form.get('last_name').setValue(res['last_name']);
      this.profileEdit_Form.get('mobile').setValue(res['mobile'] ? res['mobile'] : "");
    });
  }
  onSubmitSaveProfile(){ 
    this.profileEdit_Form.value.users_id = this.user;
  this.auth.updateProfile(this.profileEdit_Form.value).subscribe((res: any)=>{
    this.snackbar.open(res, 'Close', {
      duration: 3000,
    });  
  })
  }
  ngOnInit() {
    this.getUserData();

  }
  browse() {
    document.getElementById('choose').click();
  }
 
}
