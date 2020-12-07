import { Router } from '@angular/router';
import { Component, Output, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  title: string;
  currentUserName: string = '';
  profileImage;
  constructor(private location: Location, private router: Router,private auth: AuthService) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.title = location.path().split('/')[2];
      } else {
        this.title = 'Dashboard';
      }
    });
  }
  logOut(){   
    this.auth.logout();
  }
  ngOnInit(){
    let currentUser = JSON.parse(localStorage.getItem('Identity')).user.users_id;
    let userId = {
      users_id: currentUser
    }
    this.auth.getUserDetails(userId).subscribe(res=>{
      this.profileImage = res['result']['ImgLink'];
      this.currentUserName = res['result']['first_name'];
      localStorage.setItem("profileImage", this.profileImage);
    })
  }
}
