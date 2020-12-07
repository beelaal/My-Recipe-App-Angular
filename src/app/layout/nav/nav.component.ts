import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 profileImage = null;
  constructor(private auth: AuthService, private route:Router) { 
  }
  logOut(){ 
    this.auth.logout();
    this.route.navigate(['/login']);
    location.reload();
  }
  
  ngOnInit() {
    this.profileImage = localStorage.getItem("profileImage");
    
  }

}
